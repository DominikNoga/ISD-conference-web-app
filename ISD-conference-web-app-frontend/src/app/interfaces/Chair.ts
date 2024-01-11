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

export interface CommitteeMember {
    name: string;
    workplace?: Workplace;
}
