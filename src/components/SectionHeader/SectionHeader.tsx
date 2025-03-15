import Caption from '../Caption';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  caption?: string;
  header: string;
  paragraph?: string;
}

const SectionHeader = ({ caption, header, paragraph }: SectionHeaderProps) => (
  <div className={styles.text}>
    {caption && <Caption text={caption} />}
    <h2>{header}</h2>
    {paragraph && <p className={`${styles.paragraph} body2`}>{paragraph} </p>}
  </div>
);

export default SectionHeader;
