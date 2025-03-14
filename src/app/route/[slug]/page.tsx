import Layout from '@/components/Layout';

interface RoutePageProps {
  params: { slug: string };
}

const RoutePage = ({ params }: RoutePageProps) => (
  <Layout>
    <p>Route page: {params.slug}</p>
  </Layout>
);

export default RoutePage;
