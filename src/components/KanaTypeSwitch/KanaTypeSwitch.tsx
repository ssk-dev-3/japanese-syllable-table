import styles from "./KanaTypeSwitch.module.scss";

export type KanaType = "Hiragana" | "Katakana";

type Props = {
  isHiragana: boolean;
  onChangeRadio: (isHiragana: boolean) => void;
};

export const KanaTypeSwitch: React.FC<Props> = ({isHiragana, onChangeRadio}) => {
  return (
    <div className={styles.radioWrapper}>
      <label className={styles.radio}>
        <input type="radio" name="kanaType" id="hiragana" checked={isHiragana} onChange={() => onChangeRadio(true)} />
        <span className={styles.kanaType}>あ</span>
      </label>
      <label className={styles.radio}>
        <input type="radio" name="kanaType" id="katakana" checked={!isHiragana} onChange={() => onChangeRadio(false)} />
        <span className={styles.kanaType}>ア</span>
      </label>
    </div>
  );
};
