import { Component, OnInit } from '@angular/core';
import { CsvDataService } from 'src/app/services/csv-data/csv-data.service';

interface Tile {
  title: string;
  paragraphs: string[];
  topics: string[];
  chairs: string[];
}

@Component({
  selector: 'isd-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit {
  tiles: Tile[] = [];

  constructor(private csvDataService: CsvDataService) { }

  ngOnInit(): void {
    this.csvDataService.getTracksCsvData().subscribe(tracks => {
      this.tiles = tracks.map(track => ({
        title: `${track.name}: ${track.title}`,
        paragraphs: this.getParagraphs(track.name),
        topics: this.getTopics(track.name),
        chairs: this.getChairs(track.name)
      }));
    });
  }

  private getParagraphs(name: string): string[] {
    switch (name) {
      case 'T1':
        return [
          'Information Systems Development (ISD) is concerned with the creation of new Information Systems (IS), comprising processes, people, and technologies. More than just dealing with typical technical software development activities, ISD is eminently sociotechnical.',
          'More recently, ISD has been facing two major challenges: dealing with the increasing incorporation of artificial intelligence (AI) within software solutions and with the increasing cyberattacks that call for more robust security from the design phase. Both will have considerable implications in future DevOps pipelines. We expect to foster the discussion about the evolution of ISD to address emerging trends.'
        ];
      case 'T2':
        return [
          'It appears that “digital” is all around us, both in our personal and work lives. The growing popularity of approaches like model-driven development and low-code development, which involve code generation, has made modeling more relevant than ever in information systems development.',
          'Professionals have sometimes been reluctant to create models as part of their work but that attitude is slowly changing. In agile information systems development, the traditional reluctance to use software models has been replaced by a more practical approach, recognizing the value that models derived from user stories and other requirements artifacts can provide in ensuring the timely delivery of high-quality systems. Data scientists are also increasingly using domain models to make sense of the data in their pipelines, which are used to build, train, evaluate, and deploy machine learning models. Overall, there is a renewed appreciation for the role of information system models, including conceptual or domain models, requirements models, and software models, leading to the question of how these modeling approaches can be improved or innovated to better support new approaches to information systems development.'
        ];
      case 'T3':
        return [
          'The objective of LASD is to enhance the state-of-the-art in lean and agile software development and disseminate best practices, accompanied by stories of both successful and challenging transitions and adaptations to the evolving work environment and advancements in technology.',
          'LASD has already established itself as a prominent research forum. It originated in 2017 as a conference organized within the FedCSIS Conference Series. Throughout the pandemic, it operated as a standalone online conference for two years. Since 2023, it has become a part of ACM SAC as a dedicated track (https://lasd.pl).',
          'While agile and lean software development has already become mainstream in industry and a strong community has crystallized around the new way of thinking, making the transition to the new mindset is still challenging for many project managers. Besides, as the vast majority of software development projects are unique, agile methods often need to be tailored to accommodate specific situations. However, method tailoring is not trivial and poses serious challenges for practitioners. Indeed, one of the most distinctive features of Scrum is that its practices are not independent, but instead are very tightly coupled and synergistic.',
          'Furthermore, Scrum, XP, and Kanban were originally designed for small, single teams and do not provide guidance on dealing with scaling issues, while the last decade has seen the spread of agile into large-scale and distributed projects. To help companies in large-scale transformations, several agile scaling frameworks have been proposed. These off-the-shelf solutions incorporate predefined workflow patterns to deal with issues related to the large number of teams, inter-team coordination, and lack of up-front architecture. Nevertheless, numerous challenges while adopting off-the-shelf frameworks have been reported, including a mismatch between framework and organization, changes in management structure, changes in company policies, and the impossibility of fully implementing the whole framework at once.',
          'On top of that, the COVID-19 pandemic has forced co-located teams, who relied on face-to-face communication for work coordination, to transition into a remote work environment. Since agile methods lack guidelines for remote work, it falls upon the agile community to develop systematic solutions for remote agile teams.',
          'Currently, we are witnessing a pervasive hype surrounding generative AI coding tools that leverage Large Language Models (LLMs). These tools enable developers to accelerate coding, testing, debugging, refactoring, and documentation processes. Additionally, fine-tuned LLMs hold the potential for enhancing non-programming tasks like user story refinement, estimation, and prioritization. These remarkable advancements not only evoke excitement but also open up new research directions to further explore and optimize the integration of generative AI tools within the realm of Agile Software Development.'
        ];
      case 'T4':
        return [
          'One of ever open issues in many organization systems and research centers is how to transform large amounts of daily collected data into useful knowledge from the perspective of declared goals and expected, tangible values. One of the central roles in addressing this issue is still played by modern information systems, providing a variety of intelligent services for that purpose. The main concerns of this track are about utilizing Data Science (DS), Machine Learning (ML), Artificial Intelligence (AI), Data Mining (DM), Data Analytics (DA), and related paradigms, as a set of theories, methodologies, processes, architectures, and technologies that transform raw data into meaningful and useful information, knowledge, and value, and by this greatly support the information management process in business or research organizations. Thus, various interdisciplinary-oriented DS & ML approaches may provide organizations the ability to use their data to improve the quality of business, provide high-quality decision-making, increase financial efficiency and operational effectiveness, conduct innovative research, or satisfy regulatory requirements, in various business or research domains.',
          'The main goal of this track is to address open questions and real potential for various applications of modern approaches in DS & ML so as to develop and implement effective software services in support of information management in various organization systems. Nowadays, many information systems are intended to provide various DS & ML services to describe, analyze, cluster, classify, evaluate, predict, and visualize. We refer here to the approaches that deploy DS & ML both over strongly and weakly structured data (also including textual, image, time-series, or multimedia data), and by this, we do not exclude computer vision or natural language processing approaches.',
          'On the other hand, information system development/management is increasingly benefiting from advances in DS & ML. There is a wide room for providing robust DS & ML approaches in software engineering and information system development, in order to analyze and evaluate complex software, software processes, or software configurations. Various DS & ML approaches with repository mining can enable targeted insights and powerful predictions for software quality, software development, and software project management, to provide. Nowadays, such approaches are inevitable in large software companies to come to a successful software process that is more reliable, more effective, faster, and of a lower cost.'
        ];
      case 'T5':
        return [
          'The Digital Transformation track of the ISD conference is organized as an event co-located with the 16th PLAIS EuroSymposium on Digital Transformation. The objective of this track is to discuss a variety of challenges across digital transformation-related topics. The EuroSymposium has the objective of promoting and developing high-quality research on all issues related to Digital Transformation and Innovations. It provides a forum for researchers and practitioners – to interact, collaborate, and develop the Digital Transformation and Innovations areas.'
        ];
      case 'T6':
        return [
          'This track focuses on a broad area of information systems development education and training. The goal is to create a forum of discussion and dissemination of novel, relevant, and rigorous research as well as professional and practical experiences that address the challenges and opportunities in the education of IS specialists. This year, as previously, we strongly encourage contributions to advance the foundations of IS development methodologies.',
          'The track invites submissions on theoretical foundations and best practices related to the design, implementation, evaluation, adoption, and use of IS in formal and informal educational contexts in IS development; theoretical and empirical contributions to understanding and shaping methodological and educational aspects in IS development; and methodological contributions to IS development and IS development education.'
        ];
      case 'T7':
        return [
          'The information systems scientific area continues to change at an almost instantaneous pace, making it challenging to keep up with the latest trends. Nevertheless, understanding these latest technological trends is significant for businesses and individuals who want to stay in the vanguard. The dynamic scientific area of Information Systems (IS) is full of new technologies, tools, software frameworks, and innovative ideas. Being so, it is important for researchers as well as for professionals to be informed of these recent emerging trends and all that they entail.',
          'Today, the IS discipline faces new challenges. Emerging technologies as well as matured approaches to the social, technical, and developmental role of IS in new areas provide a new context for the evolution of the discipline over the next few years.',
          'We look forward to receiving research papers from multidisciplinary areas that intersect with IS, specifically, but not restricted to, main trends in the context of Information Systems development and application field:'
        ];
      default:
        return [];
    }
  }

  private getTopics(name: string): string[] {
    switch (name) {
      case 'T1':
        return [
          'Security in the software development pipeline',
          'Security by design',
          'Security regulations and software development',
          'Validation challenges',
          'Developing for multiple heterogeneous cloud environments',
          'Monitoring and auditing in the cloud',
          'Developing for the cloud-edge continuum',
          'Maturity assessment within ISD',
          'DevOps',
          'New generation tools to support software development pipelines',
          'Continuous integration and continuous delivery in IS development',
          'Infrastructure as Code and IS',
          'Microservices in IS development',
          'Software Architecture in the context of IS',
          'Social and cultural aspects in continuous IS development',
          'Interdisciplinary problems in managing IS development',
          'Project management',
          'Emerging issues in managing IS development'
        ];
      case 'T2':
        return [
          'Model-driven information systems development',
          'Conceptual modeling for information systems development',
          'The use of models in agile ISD',
          'Domain modeling for data analytics applications',
          'Information systems requirements modeling',
          'The transformation of models into code',
          'The transformation of text into models',
          'Dialogic approaches to information systems modeling',
          'Naturalistic information systems modeling environments',
          'Ontology-driven conceptual modeling',
          'Enterprise modelling',
          'Reference models for information systems development',
          'Generic information system models',
          'Reusing information system models',
          'Storing information system models in repositories',
          'Assessing the quality of information system models'
        ];
      case 'T3':
        return [
          'LLMs for improved efficiency',
          'Tools for AI-assisted software development',
          'Agile teams in the post-COVID era',
          'Distributed teams in Agile Software Development',
          'Scaling agile methods',
          'Tailoring agile methods',
          'Balancing agility and discipline',
          'Lean and agility at the enterprise level',
          'Challenges of agile project management',
          'Innovation and creativity in agile teams',
          'Collaborative games in Software Process Improvement',
          'Challenges of migrating to lean and agile methods',
          'Lean and agile coaching',
          'Agile gamification',
          'Measurement and metrics for agile projects, agile processes, and agile teams',
          'Integrating DevOps, Agile, and CI/CD for end-to-end software development and deployment',
          'Agile development for safety systems'
        ];
      case 'T4':
        return [
          'DS & ML – Theoretical and Practical Aspects',
          'DS & ML – Applications in Various Problem and Research Domains',
          'DS & ML for Business Analytics and Decision Making',
          'DS & ML for Customer Support and Service Management',
          'DS & ML for Quantitative Finances and Operations',
          'DS & ML for Quality Management and Standardization',
          'DS & ML for Business Process Automation',
          'DS & ML for Project Management',
          'DS & ML for Software Development and Testing',
          'DS & ML for IT Operations and for Managing IT Infrastructures',
          'DS & ML for Fraud Detection',
          'DS & ML for Information Systems',
          'DS & ML for Health and Bioinformatics',
        ];
      case 'T5':
        return [
          'Big Data',
          'Data Warehouses',
          'Business Intelligence',
          'Cloud Computing',
          'Data Lakes',
          'Deep Learning',
          'Digital Services',
          'Industry 4.0',
          'Internet of Things',
          'Mobile Applications',
          'Project Management in Digital Applications',
          'Sentiment Analysis',
          'Social Media Use and Analytics',
          'Social Networking Services',
          'Text Mining and Web Mining',
          'User Experience (UX) Design',
          'Virtual Reality',
          'Web Intelligence',
          'Innovation with Generative AI',
          'Intelligent Information Systems for Medicine'
        ];
      case 'T6':
        return [
          'Activity theory approaches to IS development education',
          'Computer-supported collaborative learning',
          'Creativity and innovation in IT-based education',
          'Curriculum development, including local implementation of AIS/IEEE/ACM curricula',
          'Digital literacy',
          'IS Education Management',
          'Generative AI Assistants in IS Education',
          'Educational systems design, development, and evaluation',
          'HCI issues in IS development for education',
          'Instructional design',
          'Integrated IS application in education',
          'IS for online education',
          'Learning platforms: mobile apps, MOOC',
          'Longitudinal and comparative studies of learning',
          'Open educational resources in IS development education',
          'Serious games, gamification, and virtual worlds for learning',
          'Social and crowd computing in educational contexts',
          'Social media and learning',
          'Socio-constructivism in IS development education',
          'User-generated content in IS development education',
          'Work-integrated learning'
        ];
      case 'T7':
        return [
          'Edge computing',
          'Quantum information science',
          'Distributed ledger technology',
          'Augmented reality',
          'Metaverse',
          'Low-code development platforms',
          'Knowledge graphs',
          'Systems of systems perspective',
          'Socio-cyber-physical systems',
          'Digital Twins',
          'Geospatial technologies',
          'Enterprise ecosystems and digital ecosystems',
          'Information Technology acceptance in business ecosystems',
          'ISD for mergers and acquisitions',
          'ISD in developing economies',
          'Information Technologies for Social Good',
          'Ethical considerations of generative AI',
          'Legal aspects of ISD'
        ];
      default:
        return [];
    }
  }

  private getChairs(name: string): string[] {
    switch (name) {
      case 'T1':
        return [
          'Tomas Cerny, University of Arizona, USA',
          'Paulo Rupino da Cunha, University of Coimbra, Portugal'
        ];
      case 'T2':
        return [
          'Geert Poels, Ghent University, Belgium',
          'Miguel Mira da Silva, Instituto Superior Técnico: Lisbon, Portugal'
        ];
      case 'T3':
        return [
          'Adam Przybyłek, Gdańsk University of Technology, Poland',
          'Alberto Rodrigues da Silva, University of Lisbon, Portugal'
        ];
      case 'T4':
        return [
          'Ivan Luković, University of Belgrade, Faculty of Organizational Sciences, Serbia',
          'Boris Delibašić, University of Belgrade, Faculty of Organizational Sciences, Serbia'
        ];
      case 'T5':
        return [
          'Jörg Becker, University of Münster, Germany',
          'Jacek Maślankowski, University of Gdańsk, Poland'
        ];
      case 'T6':
        return [
          'Muhammad Ovais Ahmad, Karlstad University, Sweden',
          'Georgia Kapitsaki, University of Cyprus, Cyprus'
        ];
      case 'T7':
        return [
          'Mārīte Kirikova, Riga Technical University, Latvia',
          'Piotr Soja, Krakow University of Economics, Poland'
        ];
      default:
        return [];
    }
  }
}