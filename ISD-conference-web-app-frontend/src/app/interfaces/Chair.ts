export interface Workplace {
    university: string;
    country: string;
};

export interface Chair {
    name: string;
    workplace: Workplace;
    function: string;
    photo: string;
    links: {
        email: string;
        linkedin?: string;
        orcid?: string;
    }
}

export interface OrganizingChairCsvData {
    name: string;
    workplace_country: string;
    workplace_university: string;
    function: string;
    photo: string;
    links_email: string;
    links_linkedin?: string;
    links_orcid?: string;
}

export interface TracksCommitteeCsvData {
    id: string;
    person_id: string;
    "first name": string;
    "last name": string;
    email: string;
    country: string;
    affiliation: string;
    "Web page": string;
    role: string;
    track_id: string;
    "track name": string;
}

export interface ProgramCommitteeMember {
    name: string;
    workplace?: Workplace;
}
