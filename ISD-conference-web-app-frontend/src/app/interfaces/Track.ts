import { Chair, CommitteeMember } from "./Chair";

export interface Track {
    order: number;
    topics: string[];
    description: string;
    title: string;
    chairs: Chair[];
    committee: CommitteeMember[]
}
