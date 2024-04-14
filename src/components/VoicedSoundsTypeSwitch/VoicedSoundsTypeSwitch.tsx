import {FC} from "react";
import styles from "./VoicedSoundsTypeSwitch.module.scss";

export type VoicedSoundsType = "unvoicedSounds" | "voicedSounds" | "semiVoicedSounds";

const voicedSoundsType = {
  unvoicedSounds: "unvoicedSounds",
  voicedSounds: "voicedSounds",
  semiVoicedSounds: "semiVoicedSounds",
} as const satisfies Record<VoicedSoundsType, string>;

type Props = {
  type: VoicedSoundsType;
  onChange: (type: VoicedSoundsType) => void;
};

export const VoicedSoundsTypeSwitch: FC<Props> = ({type, onChange}) => {
  return (
    <div className={styles.radioWrapper}>
      <label className={styles.radio}>
        <input type="radio" name="voicedSoundsType" id="unvoicedSounds" checked={type === voicedSoundsType.unvoicedSounds} onChange={() => onChange(voicedSoundsType.unvoicedSounds)} />
        <span className={styles.type}></span>
      </label>
      <label className={styles.radio}>
        <input type="radio" name="voicedSoundsType" id="voicedSounds" checked={type === voicedSoundsType.voicedSounds} onChange={() => onChange(voicedSoundsType.voicedSounds)} />
        <span className={styles.type}>゛</span>
      </label>
      <label className={styles.radio}>
        <input type="radio" name="voicedSoundsType" id="semiVoicedSounds" checked={type === voicedSoundsType.semiVoicedSounds} onChange={() => onChange(voicedSoundsType.semiVoicedSounds)} />
        <span className={styles.type}>゜</span>
      </label>
    </div>
  );
};
