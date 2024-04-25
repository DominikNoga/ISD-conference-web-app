import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as Papa from 'papaparse';
import { Chair, OrganizingChairCsvData, ProgramCommitteeMember, TracksCommitteeCsvData } from 'src/app/interfaces/Chair';
import { Track, TrackCsvData } from 'src/app/interfaces/Track';

@Injectable({
  providedIn: 'root'
})
export class CsvDataService {

  constructor(private http: HttpClient) { }

  getOrganizingCommitteeData(): Observable<Chair[]> {
    return this.http.get(`assets/csv/organizing_committe.csv`, { responseType: 'text' }).pipe(
      map(data => <OrganizingChairCsvData[]>Papa.parse(data, { header: true }).data),
      map((OrganizingChairCsvData: OrganizingChairCsvData[]) => this.mapCsvDataToOrganizingCommittee(OrganizingChairCsvData))
    );
  }

  getTracksCsvData(): Observable<Track[]> {
    return this.http.get(`assets/csv/committes.csv`, { responseType: 'text' }).pipe(
      map(data => <TracksCommitteeCsvData[]>Papa.parse(data, { header: true }).data),
      switchMap((tracksCommitteeData: TracksCommitteeCsvData[]) => {
        return this.http.get(`assets/csv/tracks.csv`, { responseType: 'text' }).pipe(
          map(data => <TrackCsvData[]>Papa.parse(data, { header: true }).data),
          map((tracksData: TrackCsvData[]) => this.mapCsvDataToTrack(tracksCommitteeData, tracksData))
        );
      })
    );
  }

  mapCsvDataToOrganizingCommittee(csvData: OrganizingChairCsvData[]): Chair[] {
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

  mapCsvDataToTrackChair(csvData: TracksCommitteeCsvData[]): Chair[] {
    return csvData
      .filter(csvItem => csvItem.role === 'track chair')
      .map(csvItem => ({
        name: csvItem['first name'] + ' ' + csvItem['last name'],
        workplace: {
          country: csvItem.country,
          university: csvItem.affiliation
        },
        function: csvItem.role,
        photo: `assets/mock_chair_img/${csvItem['first name']}_${csvItem['last name']}.jpg`,
        links: {
          email: csvItem.email || '',
          linkedin: csvItem['Web page'] || '',
        }
      }));
  }

  mapCsvDataToPcMember(csvData: TracksCommitteeCsvData[]): ProgramCommitteeMember[] {
    return csvData
      .filter(csvItem => csvItem.role === 'PC member')
      .map(csvItem => ({
        name: csvItem['first name'] + ' ' + csvItem['last name'],
        workplace: {
          country: csvItem.country,
          university: csvItem.affiliation
        }
      }));
  }

  mapCsvDataToTrack(csvChairsData: TracksCommitteeCsvData[], csvTracksData: TrackCsvData[]): Track[] {
    const trackChairs = csvChairsData.filter(csvItem => csvItem.role === 'track chair');
    const programCommittee = csvChairsData.filter(csvItem => csvItem.role === 'PC member');
    return csvTracksData.map(track => ({
      name: track.name,
      title: track['long name'],
      chairs: this.mapCsvDataToTrackChair(trackChairs.filter(chair => chair['track name'] === track.name)),
      committee: this.mapCsvDataToPcMember(programCommittee.filter(chair => chair['track name'] === track.name))
    }));
  }
}
