import dynamic from 'next/dynamic';

import Layout from '@/components/Layout';
import Routes from '@/data/routes';

const HeroSection = dynamic(() => import('@/views/route/HeroSection'));
const HighlightsSection = dynamic(() => import('@/views/route/HighlightsSection'));
const RoutesSection = dynamic(() => import('@/views/route/RoutesSection'));
const CrewSection = dynamic(() => import('@/views/route/CrewSection'));
const PaymentSection = dynamic(() => import('@/views/route/PaymentSection'));
const ReadySection = dynamic(() => import('@/views/route/ReadySection'));

type Params = Promise<{ slug: string }>;

interface RoutePageProps {
  params: Params;
}

const RoutePage = async ({ params }: RoutePageProps) => {
  const { slug } = await params;

  const route = Routes.find(x => x.title.toLowerCase() === slug);

  if (!route) {
    return (
      <Layout>
        <h1>Route not found!</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <HeroSection route={route} />
      <HighlightsSection highlights={route.routeHiglights} />
      <RoutesSection />
      <CrewSection />
      <PaymentSection />
      <ReadySection />
    </Layout>
  );
};

export default RoutePage;
