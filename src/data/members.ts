// Members pictures
import FelixLachance from '@ogmatechnologies/data/images/Felix_Lachance.jpg';
export interface Member {
  name: string;
  program: string;
  img?: string; // Default to defaultAvatars
  link?: string;
  title?: string; // Default to 'Membre'
}

export interface Team {
  members: Member[];
  title: string;
  description: string;
}

export const teams: Team[] = [
  {
    title: 'team_administration_title',
    description: 'team_administration_description',
    members: [
      {
        name: 'Leyla Hippeau-Dufour',
        program: 'engineering_software',
        title: 'title_operation',
      },
      {
        name: 'Etienne Tardif',
        program: 'engineering_electrical',
        title: 'title_tech',
      },
      {
        name: 'Mathieu Gaudreau',
        program: 'engineering_software',
        title: 'title_marketing',
      },
      {
        name: 'Benjamin Truchon',
        program: 'engineering_gpa',
        title: 'title_conception',
      },
      {
        name: 'Léa Trudeau',
        program: 'engineering_gpa',
        title: 'title_design',
      },
      {
        name: 'Charles-Olivier Faucher',
        program: 'engineering_gpa',
        title: 'title_support',
      },
    ],
  },
];
