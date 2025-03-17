import styles from './Caption.module.scss';

interface CaptionText {
  text: string;
  regularCase?: boolean;
  backgroundColor?: string;
}

const Caption = ({ text, regularCase, backgroundColor }: CaptionText) => (
  <div
    className={`${styles.caption} body2 ${!regularCase && 'caps'} `}
    {...(backgroundColor && { style: { backgroundColor } })}
  >
    {text}
  </div>
);

export default Caption;
