import styles from './Caption.module.scss';

interface CaptionText {
  text: string;
}

const Caption = ({ text }: CaptionText) => <div className={`${styles.caption} body2 caps`}>{text}</div>;

export default Caption;
