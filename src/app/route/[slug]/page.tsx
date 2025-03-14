import Layout from '@/components/Layout';

type Params = Promise<{ slug: string }>;

interface RoutePageProps {
  params: Params;
}

const RoutePage = async ({ params }: RoutePageProps) => {
  const { slug } = await params; // Resolve the promise

  return (
    <Layout>
      <p>Route page: {slug}</p>
    </Layout>
  );
};

export default RoutePage;
