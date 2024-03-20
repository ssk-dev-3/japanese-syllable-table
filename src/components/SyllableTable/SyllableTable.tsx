import {Character} from "../Character";
import styles from "./SyllableTable.module.scss";
import a from "../../assets/audio/a.m4a";
import i from "../../assets/audio/i.m4a";
import u from "../../assets/audio/u.m4a";
import e from "../../assets/audio/e.m4a";
import o from "../../assets/audio/o.m4a";

type Props = {
  isHiragana: boolean;
};

export const SyllableTable: React.FC<Props> = ({isHiragana}) => {
  return (
    <div className={styles.table}>
      <div className={styles.characterLine}>
        <Character char={isHiragana ? "あ" : "ア"} audioSource={a}></Character>
        <Character char={isHiragana ? "い" : "イ"} audioSource={i}></Character>
        <Character char={isHiragana ? "う" : "ウ"} audioSource={u}></Character>
        <Character char={isHiragana ? "え" : "エ"} audioSource={e}></Character>
        <Character char={isHiragana ? "お" : "オ"} audioSource={o}></Character>
      </div>
    </div>
  );
};
