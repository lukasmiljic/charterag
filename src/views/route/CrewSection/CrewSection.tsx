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
        carouselTitle="Solo"
        carouselText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil quod totam quis "
        title="Solo, Cabin or Group of friends"
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero saepe doloremque fugit laudantium soluta neque voluptatibus enim maxime odio aperiam ex quia ipsam odit placeat illum, repellendus veniam quam distinctio?"
        buttonText="explore our destinations"
      >
        <Carousel
          images={[
            '/sections/experience/explore.png',
            '/sections/experience/party.png',
            '/sections/experience/relax.png',
          ]}
          carouselTitle={['bla bla', 'test test', 'woah']}
          carouselText={['bla bla', 'test test', 'woah']}
        />
      </CrewArea>

      <CrewArea
        reverse
        carouselTitle="Solo"
        carouselText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil quod totam quis "
        title="Solo, Cabin or Group of friends"
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero saepe doloremque fugit laudantium soluta neque voluptatibus enim maxime odio aperiam ex quia ipsam odit placeat illum, repellendus veniam quam distinctio?"
        buttonText="explore our destinations"
      >
        <Carousel
          images={[
            '/sections/experience/explore.png',
            '/sections/experience/party.png',
            '/sections/experience/relax.png',
          ]}
          carouselTitle={['bla bla', 'test test', 'woah']}
          carouselText={['bla bla', 'test test', 'woah']}
        />
      </CrewArea>
    </div>
  </section>
);

export default CrewSection;
