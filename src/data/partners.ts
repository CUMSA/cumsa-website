export interface Partner {
  id: string;
  name: string;
  discount: string;
  picture: string;
  location?: string;
  description?: string;
  mapsUrl?: string;
}

export const partnersData: Partner[] = [
  {
    id: "seven-days",
    name: "Seven Days",
    discount: "10% off",
    picture: "/partners/seven-days.jpg",
    location: "Cambridge",
    description: "10% discount",
    mapsUrl: "https://maps.app.goo.gl/vvKCnbEXZfN2VZox6"
  },
  {
    id: "hk-fusion",
    name: "HK Fusion",
    discount: "10% off",
    picture: "/partners/hk-fusion.jpg",
    location: "Cambridge",
    description: "10% off (dine-in only)",
    mapsUrl: "https://maps.app.goo.gl/uUpMpGDePzkQJWqTA"
  },
  {
    id: "chinese-canteen",
    name: "Chinese Canteen",
    discount: "20% off",
    picture: "/partners/chinese-canteen.jpg",
    location: "Cambridge",
    description: "20% off for cash payments (10% off on top of the existing 10% offered for cash payments)",
    mapsUrl: "https://maps.app.goo.gl/Utd6hnqa2Hb4R3gf7"
  },
  {
    id: "1-1-rgm",
    name: "1-1 RGM",
    discount: "10% off",
    picture: "/partners/1-1-rgm.jpg",
    location: "Cambridge",
    description: "10% off for card payments, 20% off for cash payments (10% off on top of the existing 10% offered for cash payments)",
    mapsUrl: "https://maps.app.goo.gl/MdHqApDRjJJsm4u16"
  },
  {
    id: "mr-wang",
    name: "Mr Wang",
    discount: "10% off",
    picture: "/partners/mr-wang.jpg",
    location: "Cambridge",
    description: "20% for cash payment (10% Service Fee waived, additional 10% discount, 1 bowl per pax)",
    mapsUrl: "https://maps.app.goo.gl/CwRM6N9jXeb5HHp39"
  },
  {
    id: "jiamart",
    name: "Jiamart",
    discount: "10% off",
    picture: "/partners/jiamart.jpg",
    location: "Cambridge",
    description: "10% off in-store orders",
    mapsUrl: "https://maps.app.goo.gl/tVEEay7avMqh9JU59"
  },
  {
    id: "tiffin-truck",
    name: "Tiffin Truck",
    discount: "15% off",
    picture: "/partners/tiffin-truck.jpg",
    location: "Cambridge",
    description: "15% off (270 vouchers for CUMSA formal)",
    mapsUrl: "https://maps.app.goo.gl/A9XMvuyz5Z2sYwC67"
  },
  {
    id: "bridges",
    name: "Bridges",
    discount: "10% off",
    picture: "/partners/bridges.jpg",
    location: "Cambridge",
    description: "10% discount (eat-in or takeaway)",
    mapsUrl: "https://maps.app.goo.gl/SVvobmcfsrW9jCG39"
  },
  {
    id: "crepeaffaire",
    name: "Crepeaffaire",
    discount: "10% off",
    picture: "/partners/crepeaffaire.jpg",
    location: "Cambridge",
    description: "15% discount; 30% discount on Thursdays",
    mapsUrl: "https://maps.app.goo.gl/LcB2Y2Bc9AJBKjcZ9"
  },
  {
    id: "crepes",
    name: "Crepes",
    discount: "10% off",
    picture: "/partners/crepes.jpg",
    location: "Cambridge",
    description: "£2 off each crepe; 50p off each hot drink",
    mapsUrl: "https://maps.app.goo.gl/gQhzDwpUHGXafMSY9"
  },
  {
    id: "kings-dough",
    name: "Kings Dough",
    discount: "15% off",
    picture: "/partners/kings-dough.jpg",
    location: "Cambridge",
    description: "15% off panini (10% offered to students)",
    mapsUrl: "https://maps.app.goo.gl/zPn7haFSrHXZdLEA8"
  },
  {
    id: "the-redbull",
    name: "The Redbull",
    discount: "10% off",
    picture: "/partners/the-redbull.jpg",
    location: "Cambridge",
    description: "10% on Thursdays",
    mapsUrl: "https://maps.app.goo.gl/Rhzkmnk3spPTUdqu7"
  }, 
  {
    id: "T4", 
    name: "T4", 
    discount: "10% off", 
    picture: "/partners/t4.jpg", 
    location: "Cambridge",
    description: "10% off (online/app order), from 3-9 November",
    mapsUrl: "https://maps.app.goo.gl/GWEUYwbktBQ4WfyB6"
  }, 
  {
    id: "Moana-Poke",
    name: "Moana Poke",
    discount: "15% off",
    picture: "/partners/moana-poke.jpg",
    location: "Cambridge",
    description: "15% off 2 items",
    mapsUrl: "https://maps.app.goo.gl/xjLpwQbpMhTweA8bA"
  }, 
];

// Helper function to get all partners
export const getAllPartners = () => partnersData;

// Helper function to find partner by id
export const getPartnerById = (id: string) => partnersData.find(partner => partner.id === id);
