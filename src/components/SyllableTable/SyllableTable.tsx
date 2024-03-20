import {Character} from "../Character";
import styles from "./SyllableTable.module.scss";
import a from "../../assets/audio/a.m4a";

type Props = {
  isHiragana: boolean;
};

export const SyllableTable: React.FC<Props> = ({isHiragana}) => {
  return (
    <div className={styles.table}>
      <Character char={isHiragana ? "あ" : "ア"} audioSource={a}></Character>
    </div>
  );
};
