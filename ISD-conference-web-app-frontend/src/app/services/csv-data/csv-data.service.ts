import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Papa from 'papaparse';
import { Chair, ChairCsv } from 'src/app/interfaces/Chair';

@Injectable({
  providedIn: 'root'
})
export class CsvDataService {

  constructor(private http: HttpClient) { }

  getCsvData(path: string): Observable<Chair[]> {
    return this.http.get(`assets/csv/${path}.csv`, { responseType: 'text' }).pipe(
      map(data => <ChairCsv[]>Papa.parse(data, { header: true }).data),
      map((chairCsv: ChairCsv[]) => this.mapCsvDataToChair(chairCsv))
    );
  }

  getCommittiesData(): Observable<any[]> {
    return this.getCsvData('committes');
  }

  mapCsvDataToChair(csvData: ChairCsv[]): Chair[] {
    return csvData.map(csvItem => ({
      name: csvItem.name,
      workplace: {
        country: csvItem.workplace_country,
        university: csvItem.workplace_university
      },
      function: csvItem.function,
      photo: csvItem.photo,
      links: {
        email: csvItem.links_email || '',
        linkedin: csvItem.links_linkedin || '',
        orcid: csvItem.links_orcid || ''
      }
    }));
  }
}
