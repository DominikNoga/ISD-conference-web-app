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

export interface ChairCsv {
    name: string;
    workplace_country: string;
    workplace_university: string;
    function: string;
    photo: string;
    links_email: string;
    links_linkedin?: string;
    links_orcid?: string;
}

export interface CommitteeMember {
    name: string;
    workplace?: Workplace;
}
