import { Chair } from "../interfaces/Chair";
import { Track } from "../interfaces/Track";
import { TRACK1_COMMITTEE, TRACK2_COMMITTEE, TRACK3_COMMITTEES } from "./trackCommittees";


const BASE_IMG_PATH = 'assets/mock_chair_img'

export const MOCK_CHAIRS: Chair[] = [
    {
        name: 'Bartosz Marcinkowski',
        workplace: {
            country: 'Poland',
            university: 'University of Gdańsk'
        },
        function: 'General Chair',
        photo: `${BASE_IMG_PATH}/Bartosz_Marcinkowski.jpg`,
        links: {
            email: '',
            linkedin: '',
            orcid: ''
        }
    },
    {
        name: 'Adam Przybyłek',
        workplace: {
            country: 'Poland',
            university: 'Gdańsk University of Technology'
        },
        function: 'Program Chair',
        photo: `${BASE_IMG_PATH}/Adam_Przybylek.jpg`,
        links: {
            email: '',
            linkedin: '',
            orcid: ''
        }
    },
    {
        name: 'Muhammad Ovais Ahmad',
        workplace: {
            country: 'Sweden',
            university: 'Karlstad University'
        },
        function: 'Publicity Chair',
        photo: `${BASE_IMG_PATH}/Muhammad-Ovais-AHMAD.jpg`,
        links: {
            email: '',
            linkedin: '',
            orcid: ''
        }
    },
    {
        name: 'Aleksander Jarzębowicz',
        workplace: {
            country: 'Poland',
            university: 'Gdańsk University of Technology'
        },
        function: 'Proceedings Chair',
        photo: `${BASE_IMG_PATH}/Aleksander_Jarzębowicz.jpg`,
        links: {
            email: '',
            linkedin: '',
            orcid: ''
        }
    },
    {
        name: 'Jacek Maślankowski',
        workplace: {
            country: 'Poland',
            university: 'University of Gdańsk'
        },
        function: 'Local Arrangement Co-Chair',
        photo: `${BASE_IMG_PATH}/Jacek_Maslankowski.jpg`,
        links: {
            email: '',
            linkedin: '',
            orcid: ''
        }
    },
    {
        name: 'Marek Bednarczyk',
        workplace: {
            country: 'Poland',
            university: 'Polish-Japanese Academy of Information Technology'
        },
        function: 'Local Arrangement Co-Chair',
        photo: `${BASE_IMG_PATH}/Marek_Bednarczyk.jpg`,
        links: {
            email: '',
            linkedin: '',
            orcid: ''
        }
    },
    {
        name: 'Anna Węsierska',
        workplace: {
            country: 'Poland',
            university: 'University of Gdańsk'
        },
        function: 'Conference Office',
        photo: `${BASE_IMG_PATH}/Anna_Wesierska`,
        links: {
            email: '',
        }
    },
    {
        name: 'Dariusz Kralewski',
        workplace: {
            country: 'Poland',
            university: 'University of Gdańsk'
        },
        function: 'Web Chair',
        photo: `${BASE_IMG_PATH}/Dariusz_Kralewski.jpg`,
        links: {
            email: '',
        }
    }
];

export const MOCK_TRACKS: Track[] = [
    {
        order: 1,
        title: 'Managing IS Development and Operations',
        description: 'Information Systems Development (ISD) is concerned with the creation of new Information Systems (IS), comprising processes, people, and technologies. More than just dealing with typical technical software development activities, ISD is eminently sociotechnical.\n\nMore recently, ISD has been facing two major challenges: dealing with the increasing incorporation of artificial intelligence (AI) within software solutions and with the increasing cyberattacks that call for more robust security from the design phase. Both will have considerable implications in future DevOps pipelines. We expect to foster the discussion about the evolution of ISD to address emerging trends.',
        topics: [
            'Security in the software development pipeline',
            'Security by design',
            'Security regulations and software development',
            'Validation challenges',
            'Developing for multiple heterogenous cloud environments',
            'Monitoring and auditing in the cloud',
        ],
        chairs: [
            MOCK_CHAIRS[0], MOCK_CHAIRS[1]
        ],
        committee: TRACK1_COMMITTEE
    },
    {
        order: 2,
        title: 'Information Systems Modelling',
        description: 'It appears that “digital” is all around us, both in our personal and work lives. The growing popularity of approaches like model-driven development and low-code development, which involve code generation, has made modeling more relevant than ever in information systems development.\n\nProfessionals have sometimes been reluctant to create models as part of their work but that attitude is slowly changing...',
        topics: [
            'Model-driven information systems development',
            'Conceptual modeling for information systems development',
            'The use of models in agile ISD',
            'Domain modeling for data analytics applications',
            'Information systems requirements modeling',
            'The transformation of models into code',
        ],
        chairs: [
            MOCK_CHAIRS[2], MOCK_CHAIRS[3]
        ],
        committee: TRACK2_COMMITTEE
    },
    {
        order: 3,
        title: 'Lean and Agile Software Development',
        description: 'The objective of LASD is to enhance the state-of-the-art in lean and agile software development and disseminate best practices, accompanied by stories of both successful and challenging transitions and adaptations to the evolving work environment and advancements in technology.\n\nLASD has already established itself as a prominent research forum...',
        topics: [
            'LLMs for improved efficiency',
            'Tools for AI-assisted software development',
            'Agile teams in the post-COVID era',
            'Distributed teams in Agile Software Development',
            'Scaling agile methods',
            'Tailoring agile methods',
        ],
        chairs: [
            MOCK_CHAIRS[4], MOCK_CHAIRS[5]
        ],
        committee: TRACK3_COMMITTEES
    }
];

