import dynamic from 'next/dynamic';

import Layout from '@/components/Layout';

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

  return (
    <Layout>
      {/* <p>Route page: {slug}</p> */}
      <HeroSection />
      <HighlightsSection />
      <RoutesSection />
      <CrewSection />
      <PaymentSection />
      <ReadySection />
    </Layout>
  );
};

export default RoutePage;
