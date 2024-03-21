
export interface ConferenceEvent {
    title?: string;
    topic?: string;
    location: string;
    homepage?: Homepage;
    isHomePageArchive: boolean;
    proceedings?: Proceeding[];
}

export interface Proceeding {
    title: string;
    link: string;
}

export interface Homepage{
    title: string;
    link: string;
}
