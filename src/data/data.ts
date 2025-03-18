interface RouteHiglight {
  title: string;
  body: string;
  image: string;
}

export interface Route {
  title: string;
  headline: string;
  heroImage: string;
  price: number;
  body: string;
}

const Routes: Route[] = [
  {
    title: 'Ultra',
    headline: 'The best stories are yet to be told',
    body: 'From mountains and canyons to fjord- like bays, nostalgic Old towns to most stunning beaches.Get to now Croatias twin sister — Montenegro',
    price: 1136,
    heroImage: '/sections/routeHero/bg.jpg',
  },
];

export default Routes;
