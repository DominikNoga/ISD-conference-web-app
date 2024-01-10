import { Event } from "src/app/interfaces/Event";

export const EVENTS: Event[] = [
    { description: 'Conference Website Online', date: new Date('2023-10-16') },
    { description: 'Assembling PCs of Individual Tracks', date: new Date('2023-12-31') },
    { description: 'Paper Submission Start', date: new Date('2024-01-16') },
    { description: 'Paper Submission Deadline', date: new Date('2024-04-16') },
    { description: 'Acceptance Notifications', date: new Date('2024-06-04') },
    { description: 'Camera-Ready Paper Submission and Author Registration', date: new Date('2024-06-30') },
    { description: 'Early Bird Non-Presenting Participants Registration', date: new Date('2024-07-21') },
    { description: 'Late Non-Presenting Participants Registration', date: new Date('2024-08-11') },
    { description: 'ISD 2024 Conference', date: { start: new Date('2024-08-26'), end: new Date('2024-08-28') } },
    { description: 'ISD 2025 Conference', date: undefined },
];