import { SideNavItem } from "src/app/interfaces/SideNav";
import { Track } from "src/app/interfaces/Track";

export const getSideNavItems = (tracks: Track[]): SideNavItem[] => [
    {
        label: 'Organizing Committee',
        idToGo: 'organizing-committee'
    },
    {
        label: 'Tracks',
        idToGo: 'tracks',
        subMenu: tracks.map(track => ({
            label: `${track.name}:  ${track.title}`,
            idToGo: track.name
        }))
    },
    {
        label: 'International Steering Committee',
        idToGo: 'internationalSteeringCommittee'
    }
];
