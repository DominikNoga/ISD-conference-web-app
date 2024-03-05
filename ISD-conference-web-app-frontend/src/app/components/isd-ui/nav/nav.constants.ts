import { NavItem } from "src/app/interfaces/Nav";

export const NAV_ITEMS: NavItem[] = [
    {
        item: {
            items: [
                {
                    route: '/call-for-papers',
                    label: 'Call For Papers',
                    isActive: false
                },
                {
                    route: '/tracks',
                    label: 'Tracks',
                    isActive: false
                }
            ],
            label: 'Submissions',
            isActive: false
        }
    },
    {
        item: {
            route: '/register',
            label: 'Register',
            isActive: false
        }
    },
    {
        item: {
            route: '/history',
            label: 'ISD History',
            isActive: false
        }
    },
    {
        item: {
            route: '/committees',
            label: 'Committees',
            isActive: false
        }
    },
    {
        item: {
            items: [
                {
                    route: '/conference-venue',
                    label: 'Conference venue',
                    isActive: false
                },
                {
                    route: '/visa-requirements',
                    label: 'Visa requirements',
                    isActive: false
                },
                {
                    route: '/travel-information',
                    label: 'Travel information',
                    isActive: false
                }
            ],
            label: 'Location',
            isActive: false
        }
    }
];
