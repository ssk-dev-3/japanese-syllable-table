import {Character} from "../Character";
import styles from "./SyllableTable.module.scss";

type Props = {
  isHiragana: boolean;
};

export const SyllableTable: React.FC<Props> = ({isHiragana}) => {
  return (
    <div className={styles.table}>
      <Character char={isHiragana ? "あ" : "ア"} audioSource="/audio/a.m4a"></Character>
    </div>
  );
};
