import { Supporter } from "src/app/interfaces/Supporter";

const BASE_PATH = 'assets/supporters';

export const SUPPORTERS: Supporter[] = [
    {
        img: `${BASE_PATH}/ministerstwo_edukacji.png`,
        link: 'https://www.gov.pl/web/science/ministry1'
    },
    {
        img: `${BASE_PATH}/ais-affiliated.png`,
        link: 'https://aisnet.org/page/AffiliatedConference'
    },
    {
        img: `${BASE_PATH}/farenheit.png`,
        link: 'https://faru.edu.pl/en'
    }
];
