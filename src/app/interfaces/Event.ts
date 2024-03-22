export interface DateBetween {
    start: Date;
    end: Date
}

export interface Event {
    date?: Date | DateBetween;
    description: string;
}
