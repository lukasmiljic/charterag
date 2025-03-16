import Image from 'next/image';

import styles from './TestemonialsSection.module.scss';

const TestemonialsSection = () => (
  <section className={styles.container}>
    <Image className={styles.bgimage} src="/sections/testemonials/testemonialbg.png" alt="background image" fill />
    <div className={styles.content}>
      <h3>Our guests love it!</h3>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.userinfo}>
            <Image
              className={styles.userimage}
              src="/sections/testemonials/user.png"
              alt="user profile picture"
              width={40}
              height={40}
            />
            <p className="body2">Courtney Henry</p>
          </div>
          <div className={styles.stars}>
            <Image src="/sections/testemonials/Star.svg" alt="star" width={23} height={23} />
            <Image src="/sections/testemonials/Star.svg" alt="star" width={23} height={23} />
            <Image src="/sections/testemonials/Star.svg" alt="star" width={23} height={23} />
            <Image src="/sections/testemonials/Star.svg" alt="star" width={23} height={23} />
            <Image src="/sections/testemonials/Star.svg" alt="star" width={23} height={23} />
          </div>
          <h5>Amazing experience</h5>
          <p className="body1">
            Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend
            diam tellus magnis volutpat nulla.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TestemonialsSection;
