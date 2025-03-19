import Carousel from '@/components/Carousel';
import CrewArea from '@/components/CrewArea';
import SectionHeader from '@/components/SectionHeader';

import styles from './CrewSection.module.scss';

const CrewSection = () => (
  <section className={`${styles.crewSection} centercontainer`}>
    <SectionHeader
      className={styles.crewSectionHeader}
      caption="step 2."
      header="Choose your crew"
      paragraph="Lorem ipsum dolor sit amet"
    />
    <div className={styles.crewAreas}>
      <CrewArea
        title="Solo, Cabin or Group of friends"
        body="Solo, With a friend or With the whole crew, we got it all covered! Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
        buttonText="compare cabins"
        buttonRoute="/compare/cabins"
      >
        <Carousel
          images={['/sections/crew/cabin.jpg', '/sections/experience/party.png', '/sections/experience/relax.png']}
          carouselTitle={['Solo', 'test test', 'woah']}
          carouselText={[
            'Book a single spot and share a bunk bed cabin With a person of the same gender. We have a lot of single travelers just like you.',
            'test test',
            'woah',
          ]}
        />
      </CrewArea>

      <CrewArea
        reverse
        title="Catamaran or Monohull"
        body="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
        buttonText="compare yachts"
        buttonRoute="/compare/yachts"
      >
        <Carousel
          images={['/sections/crew/catamaran.jpg', '/sections/crew/monohull.jpg']}
          carouselTitle={['Catamaran', 'Monohull']}
          carouselText={['Twin hulled boat - for those Who travel in style', 'test test']}
        />
      </CrewArea>

      <CrewArea
        title="Skipper and Host"
        body="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
        buttonText="about us"
        buttonRoute="/about"
      >
        <Carousel
          images={['/sections/crew/skipper.jpg', '/sections/experience/party.png', '/sections/experience/relax.png']}
          carouselTitle={['Skipper', 'test test', 'woah']}
          carouselText={['Lorem ipsum dolor sit amet consectetur.', 'test test', 'woah']}
        />
      </CrewArea>
    </div>
  </section>
);

export default CrewSection;
