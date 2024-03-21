import { SideNavItem } from "src/app/interfaces/SideNav";

export const SIDE_NAV_ITEMS: SideNavItem[] = [
    {
        label: 'Organizing Committee',
        idToGo: 'organizing-committee'
    },
    {
        label: 'Tracks',
        idToGo: 'tracks',
        subMenu: [
            {
                label: 'Managing IS Development and Operations',
                idToGo: 'track-1'
            },
            {
                label: 'Information Systems Modelling',
                idToGo: 'track-2'
            },
            {
                label: 'Lean and Agile Software Development',
                idToGo: 'track-3'
            },
        ]
    },
    {
        label: 'Journal-First Papers',
        idToGo: 'journal-first-papers'
    },
    {
        label: 'International Steering Committee',
        idToGo: 'international-steering-committee'
    }
];
