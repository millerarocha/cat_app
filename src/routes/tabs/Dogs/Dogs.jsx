import CardGallery from '../../../components/CardGallery';
import Loader from '../../../components/Loader';
import Section from '../../../components/Section';
import { DogInfo } from './models/DogInfo';
import { getDogsData } from './requests';
import { Suspense } from 'react';

const apiData = getDogsData();

const Dogs = () => {
  const data = apiData.read();
  const dogData = data?.map((dog) => new DogInfo(dog));
  return (
    <Section>
      <Suspense fallback={<Loader />}>
        <CardGallery data={dogData} />
      </Suspense>
    </Section>
  );
};

export default Dogs;
