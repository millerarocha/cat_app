import CardGallery from '../../../components/CardGallery';
import Section from '../../../components/Section';
import { useGetCatData } from './hooks/useGetCatData';

const Cats = () => {
  const { data, loading } = useGetCatData();
  return (
    <Section>
      <CardGallery data={data} isLoading={loading} />
    </Section>
  );
};

export default Cats;
