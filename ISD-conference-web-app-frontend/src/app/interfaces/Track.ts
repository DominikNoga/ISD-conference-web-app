import { Chair, ProgramCommitteeMember } from "./Chair";

export interface Track {
    name: string;
    title: string;
    chairs: Chair[];
    committee: ProgramCommitteeMember[]
}

export interface TrackCsvData {
    id: number;
    name: string;
    "long name": string;
}