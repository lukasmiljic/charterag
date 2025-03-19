export interface RouteHiglight {
  title: string;
  body: string;
  image: string;
}

export interface RouteInfoCard {
  title: string;
  review: number;
  numberOfReviews: number;
  vibe: string;
  groupSize: number;
  ageRange: string;
  freeWifi?: boolean;
  dateRange: string;
}

const boilerplateHighlights: RouteHiglight[] = [
  {
    title: 'Fjord like bays',
    body: 'Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.',
    image: '/sections/lifestyle/image1.png',
  },
  {
    title: 'Fjord like bays',
    body: 'Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.',
    image: '/sections/lifestyle/image2.png',
  },
  {
    title: 'Fjord like bays',
    body: 'Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.',
    image: '/sections/lifestyle/image3.png',
  },
  {
    title: 'Fjord like bays',
    body: 'Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.',
    image: '/sections/lifestyle/image4.png',
  },
  {
    title: 'Fjord like bays',
    body: 'Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.',
    image: '/sections/lifestyle/image5.png',
  },
  {
    title: 'Fjord like bays',
    body: 'Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.',
    image: '/sections/lifestyle/image6.png',
  },
];

const boilerplateInfoCards: RouteInfoCard[] = [
  {
    title: 'Dubrovnik party route',
    review: 4.9,
    numberOfReviews: 451,
    vibe: 'party',
    groupSize: 40,
    ageRange: '20 to 40',
    dateRange: 'July | August',
    freeWifi: true,
  },
  {
    title: 'Dubrovnik sail route',
    review: 4.8,
    numberOfReviews: 425,
    vibe: 'sail',
    groupSize: 20,
    ageRange: '30 to 60',
    dateRange: 'July | August',
    freeWifi: true,
  },
  {
    title: 'Dubrovnik explore route',
    review: 4.2,
    numberOfReviews: 402,
    vibe: 'explore',
    groupSize: 10,
    ageRange: '20 to 30',
    dateRange: 'April | August',
    freeWifi: true,
  },
  {
    title: 'Dubrovnik adventure route',
    review: 5,
    numberOfReviews: 505,
    vibe: 'adventure',
    groupSize: 15,
    ageRange: '20 to 40',
    dateRange: 'July | August',
    freeWifi: true,
  },
];

export interface Route {
  title: string;
  headline: string;
  heroImage: string;
  coverImage: string;
  primaryCoverImage?: string;
  price: number;
  body: string[];
  partyPercentage: number;
  adventurePercentage: number;
  slug: string;
  section: Sections[];
  routeHiglights: RouteHiglight[];
  routeInfoCard: RouteInfoCard;
}

export enum Sections {
  Experience,
  Routes,
}

const Routes: Route[] = [
  {
    slug: 'ultra',
    title: 'Ultra',
    headline: 'The best stories are yet to be told',
    body: [
      'From mountains and canyons to fjord- like bays, nostalgic Old towns to most stunning beaches.Get to now Croatias twin sister — Montenegro',
      'Walk the medieval streets of Kotor, dine the most amazing seafood in the Fishermans village. Feel like a millionaire in Porto Montenegro, the most luxurious marina in this part of the World. Visit nostalgic Old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor. Get Wild in Budva and Tivat. Relax in freshly opened, Chic Lazure marina.',
    ],
    price: 1136,
    heroImage: '/sections/routes/ultra.png',
    coverImage: '/sections/routes/ultra.png',
    partyPercentage: 90,
    adventurePercentage: 30,
    section: [Sections.Routes],
    routeHiglights: boilerplateHighlights,
    routeInfoCard: boilerplateInfoCards[0],
  },
  {
    slug: 'party',
    title: 'Party',
    headline: 'The best stories are yet to be told',
    body: [
      'From mountains and canyons to fjord- like bays, nostalgic Old towns to most stunning beaches.Get to now Croatias twin sister — Montenegro',
      'Walk the medieval streets of Kotor, dine the most amazing seafood in the Fishermans village. Feel like a millionaire in Porto Montenegro, the most luxurious marina in this part of the World. Visit nostalgic Old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor. Get Wild in Budva and Tivat. Relax in freshly opened, Chic Lazure marina.',
    ],
    price: 1136,
    heroImage: '/sections/routeHero/bg.jpg',
    coverImage: '/sections/experience/party.png',
    primaryCoverImage: '/sections/routes/party.png',
    partyPercentage: 95,
    adventurePercentage: 10,
    section: [Sections.Routes, Sections.Experience],
    routeHiglights: boilerplateHighlights,
    routeInfoCard: boilerplateInfoCards[0],
  },
  {
    slug: 'greece',
    title: 'Greece',
    headline: 'The best stories are yet to be told',
    body: [
      'From mountains and canyons to fjord- like bays, nostalgic Old towns to most stunning beaches.Get to now Croatias twin sister — Montenegro',
      'Walk the medieval streets of Kotor, dine the most amazing seafood in the Fishermans village. Feel like a millionaire in Porto Montenegro, the most luxurious marina in this part of the World. Visit nostalgic Old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor. Get Wild in Budva and Tivat. Relax in freshly opened, Chic Lazure marina.',
    ],
    price: 1136,
    heroImage: '/sections/routes/greece.png',
    coverImage: '/sections/routes/greece.png',
    partyPercentage: 40,
    adventurePercentage: 80,
    section: [Sections.Routes],
    routeHiglights: boilerplateHighlights,
    routeInfoCard: boilerplateInfoCards[3],
  },
  {
    slug: 'adventure',
    title: 'Adventure',
    headline: 'The best stories are yet to be told',
    body: [
      'From mountains and canyons to fjord- like bays, nostalgic Old towns to most stunning beaches.Get to now Croatias twin sister — Montenegro',
      'Walk the medieval streets of Kotor, dine the most amazing seafood in the Fishermans village. Feel like a millionaire in Porto Montenegro, the most luxurious marina in this part of the World. Visit nostalgic Old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor. Get Wild in Budva and Tivat. Relax in freshly opened, Chic Lazure marina.',
    ],
    price: 1136,
    heroImage: '/sections/routes/adventure.png',
    coverImage: '/sections/routes/adventure.png',
    partyPercentage: 10,
    adventurePercentage: 90,
    section: [Sections.Routes],
    routeHiglights: boilerplateHighlights,
    routeInfoCard: boilerplateInfoCards[3],
  },
  {
    slug: 'sail',
    title: 'Sail',
    headline: 'The best stories are yet to be told',
    body: [
      'From mountains and canyons to fjord- like bays, nostalgic Old towns to most stunning beaches.Get to now Croatias twin sister — Montenegro',
      'Walk the medieval streets of Kotor, dine the most amazing seafood in the Fishermans village. Feel like a millionaire in Porto Montenegro, the most luxurious marina in this part of the World. Visit nostalgic Old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor. Get Wild in Budva and Tivat. Relax in freshly opened, Chic Lazure marina.',
    ],
    price: 1136,
    coverImage: '/sections/experience/sail.png',
    heroImage: '/sections/routeHero/bg.jpg',
    partyPercentage: 10,
    adventurePercentage: 10,
    section: [Sections.Experience],
    routeHiglights: boilerplateHighlights,
    routeInfoCard: boilerplateInfoCards[1],
  },
  {
    slug: 'explore',
    title: 'Explore',
    headline: 'The best stories are yet to be told',
    body: [
      'From mountains and canyons to fjord- like bays, nostalgic Old towns to most stunning beaches.Get to now Croatias twin sister — Montenegro',
      'Walk the medieval streets of Kotor, dine the most amazing seafood in the Fishermans village. Feel like a millionaire in Porto Montenegro, the most luxurious marina in this part of the World. Visit nostalgic Old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor. Get Wild in Budva and Tivat. Relax in freshly opened, Chic Lazure marina.',
    ],
    price: 1136,
    coverImage: '/sections/experience/explore.png',
    heroImage: '/sections/routeHero/bg.jpg',
    partyPercentage: 10,
    adventurePercentage: 10,
    section: [Sections.Experience],
    routeHiglights: boilerplateHighlights,
    routeInfoCard: boilerplateInfoCards[2],
  },
  {
    slug: 'relax',
    title: 'Relax',
    headline: 'The best stories are yet to be told',
    body: [
      'From mountains and canyons to fjord- like bays, nostalgic Old towns to most stunning beaches.Get to now Croatias twin sister — Montenegro',
      'Walk the medieval streets of Kotor, dine the most amazing seafood in the Fishermans village. Feel like a millionaire in Porto Montenegro, the most luxurious marina in this part of the World. Visit nostalgic Old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor. Get Wild in Budva and Tivat. Relax in freshly opened, Chic Lazure marina.',
    ],
    price: 1136,
    coverImage: '/sections/experience/relax.png',
    heroImage: '/sections/routeHero/bg.jpg',
    partyPercentage: 10,
    adventurePercentage: 10,
    section: [Sections.Experience],
    routeHiglights: boilerplateHighlights,
    routeInfoCard: boilerplateInfoCards[3],
  },
];

export default Routes;
