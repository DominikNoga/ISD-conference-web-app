import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Papa from 'papaparse';
import { Chair, ChairCsv } from 'src/app/interfaces/Chair';
import { Ticket } from 'src/app/interfaces/Ticket';
import { keynote } from 'src/app/interfaces/keynote';
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



  mapCsvDataToTicket(csvData: any[]): Ticket[] {
    return csvData.map(csvItem => ({
      order: parseInt(csvItem.order),
      Fullprice: parseInt(csvItem.Fullprice),
      DiscountBool: csvItem.DiscountBool === "true",
      DiscountedPrice: parseInt(csvItem.DiscountedPrice),
      TicketType: csvItem.TicketType,
      TicketDescription: csvItem.TicketDescription,
      DiscountExpiration: new Date(csvItem.DiscountExpiration),
      AvailableUntil: new Date(csvItem.AvailableUntil),
      Color: csvItem.Color
    }));
  }

  mapCsvDataTokeynotes(csvData: any[]): keynote[] {
    return csvData.map(csvItem => ({
      order: parseInt(csvItem.order),
      name: csvItem.name,
      image: csvItem.image,
      from: csvItem.from,
      title: csvItem.title,
      abstract: csvItem.abstract,
      about: csvItem.about
    }));
  }

  universalgetCsvData<T>(path: string, mapFunction: (data: any[]) => T[]): Observable<T[]> {
    return this.http.get(`assets/csv/${path}.csv`, { responseType: 'text' }).pipe(
      map(data => Papa.parse(data, { header: true }).data),
      map(mapFunction)
    );
  }

  getTicketsData(): Observable<Ticket[]> {
    return this.universalgetCsvData('tickets', this.mapCsvDataToTicket);
  }

  getKeynotesData(): Observable<keynote[]> {
    return this.universalgetCsvData('keynotes', this.mapCsvDataTokeynotes);
  }

}
