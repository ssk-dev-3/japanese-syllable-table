import styles from "./KanaTypeSwitch.module.scss";

export type KanaType = "Hiragana" | "Katakana";

type Props = {
  isHiragana: boolean;
  onChange: (isHiragana: boolean) => void;
};

export const KanaTypeSwitch: React.FC<Props> = ({isHiragana, onChange}) => {
  return (
    <div className={styles.radioWrapper}>
      <label className={styles.radio}>
        <input type="radio" name="kanaType" id="hiragana" checked={isHiragana} onChange={() => onChange(true)} />
        <span className={styles.kanaType}>あ</span>
      </label>
      <label className={styles.radio}>
        <input type="radio" name="kanaType" id="katakana" checked={!isHiragana} onChange={() => onChange(false)} />
        <span className={styles.kanaType}>ア</span>
      </label>
    </div>
  );
};
