export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  subject: string;
  college: string;
  year: string;
  photo: string;
  email?: string;
}

export const committeeData: CommitteeMember[] = [
  {
    id: "president",
    name: "Abdul Mateen Bin Kamal",
    position: "President",
    subject: "History & Politics",
    college: "Wolfson College",
    year: "3rd Year",
    photo: "/committee/26-01.jpg",
    email: "president@cumsa.org"
  },
  {
    id: "vice-president",
    name: "Chloe Young",
    position: "Vice President",
    subject: "Natural Sciences",
    college: "Girton College",
    year: "3rd Year",
    photo: "/committee/26-02.jpg",
    email: "vice-president@cumsa.org"
  },
  {
    id: "secretary",
    name: "Tan Jia Xuan",
    position: "Secretary",
    subject: "Law",
    college: "St John's College",
    year: "2nd Year",
    photo: "/committee/26-03.jpg",
    email: "secretary@cumsa.org"
  },
  {
    id: "treasurer",
    name: "Yu Tang Koo",
    position: "Treasurer",
    subject: "Geography",
    college: "St Catharine's College",
    year: "2nd Year",
    photo: "/committee/26-04.jpg",
    email: "treasurer@cumsa.org"
  },
  {
    id: "sports",
    name: "Krishnan Akash",
    position: "Sports Secretary",
    subject: "Economics",
    college: "Queens' College",
    year: "2nd Year",
    photo: "/committee/26-05.jpg",
    email: "sports@cumsa.org"
  },
  {
    id: "publicity",
    name: "Sophie Khoo",
    position: "Publicity Secretary",
    subject: "Law",
    college: "Homerton College",
    year: "2nd Year",
    photo: "/committee/26-06.jpg",
    email: "publicity@cumsa.org"
  },
  {
    id: "access",
    name: "Loy Qi Xuan Brandon",
    position: "Access & Outreach Officer",
    subject: "Law",
    college: "Homerton College",
    year: "2nd Year",
    photo: "/committee/26-07.jpg",
    email: "access@cumsa.org"
  },
  {
    id: "sponsorships",
    name: "Claire Sim",
    position: "Sponsorships & Careers Officer",
    subject: "Law",
    college: "Murray Edwards College",
    year: "2nd Year",
    photo: "/committee/26-08.jpg",
    email: "sponsorships@cumsa.org"
  },
  {
    id: "database",
    name: "Kuai En Kai Ethan",
    position: "Database Officer",
    subject: "Computer Science",
    college: "St John's College",
    year: "2nd Year",
    photo: "/committee/26-09.jpg",
    email: "database@cumsa.org"
  },
  {
    id: "events1",
    name: "Joel Chik Yan Xiang",
    position: "Events Officer",
    subject: "Human, Social, & Political Sciences",
    college: "St Edmund's College",
    year: "2nd Year",
    photo: "/committee/26-10.jpg",
    email: "events@cumsa.org"
  },
  {
    id: "events2",
    name: "Brian Chua",
    position: "Events Officer",
    subject: "Law",
    college: "St John's College",
    year: "2nd Year",
    photo: "/committee/26-11.jpg",
    email: "events@cumsa.org"
  },
  {
    id: "events3",
    name: "Mohanty Puja Priya",
    position: "Events Officer",
    subject: "Natural Sciences",
    college: "King's College",
    year: "2nd Year",
    photo: "/committee/26-12.jpg",
    email: "events@cumsa.org"
  },
  {
    id: "phd1",
    name: "Lim Ren Jie",
    position: "Graduate Representative",
    subject: "Economics and Data Science",
    college: "Wolfson College",
    year: "MPhil",
    photo: "/committee/26-13.jpg",
    email: "gradreps@cumsa.org"
  },
  {
    id: "phd2",
    name: "Hou Boyang",
    position: "Graduate Representative",
    subject: "History",
    college: "Churchill College",
    year: "3rd Year (PhD)",
    photo: "/committee/26-14.jpg",
    email: "gradreps@cumsa.org"
  },
];

export const getCommitteeMembers = () => committeeData;
