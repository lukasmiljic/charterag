import dynamic from 'next/dynamic';

import Layout from '@/components/Layout';

const HeroSection = dynamic(() => import('@/views/home/HeroSection'));
const ExperienceSection = dynamic(() => import('@/views/home/ExperienceSection'));
const RoutesSection = dynamic(() => import('@/views/home/RoutesSection'));
const TestemonialsSection = dynamic(() => import('@/views/home/TestemonialsSection'));
const LifestyleSection = dynamic(() => import('@/views/home/LifestyleSection'));
const PaymentSection = dynamic(() => import('@/views/home/PaymentSection'));
const FlexiblePaymentSection = dynamic(() => import('@/views/home/FlexiblePaymentSection'));
const BucketListSection = dynamic(() => import('@/views/home/BucketListSection'));

const HomePage = () => (
  <Layout>
    <HeroSection />
    <ExperienceSection />
    <RoutesSection />
    <TestemonialsSection />
    <LifestyleSection />
    <PaymentSection />
    <FlexiblePaymentSection />
    <BucketListSection />
  </Layout>
);

export default HomePage;
