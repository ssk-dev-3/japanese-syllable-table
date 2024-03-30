import styles from "./KanaTypeSwitch.module.scss";

export type KanaType = "Hiragana" | "Katakana";

type Props = {
  isHiragana: boolean;
  onClickRadio: (isHiragana: boolean) => void;
};

export const KanaTypeSwitch: React.FC<Props> = ({isHiragana, onClickRadio}) => {
  return (
    <div className={styles.radioWrapper}>
      <label className={styles.radio}>
        <input type="radio" name="kanaType" id="hiragana" checked={isHiragana} onChange={() => onClickRadio(true)} onTouchEnd={() => onClickRadio(true)} />
        <span className={styles.kanaType}>あ</span>
      </label>
      <label className={styles.radio}>
        <input type="radio" name="kanaType" id="katakana" checked={!isHiragana} onChange={() => onClickRadio(false)} onTouchEnd={() => onClickRadio(false)} />
        <span className={styles.kanaType}>ア</span>
      </label>
    </div>
  );
};
