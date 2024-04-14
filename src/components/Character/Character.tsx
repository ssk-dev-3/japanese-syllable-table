import {VoicedSoundsType} from "../VoicedSoundsTypeSwitch/VoicedSoundsTypeSwitch";
import styles from "./Character.module.scss";

export type Charcter = {
  hiragana: string;
  katakana: string;
  audio?: string;
  voicedSoundsHiragana?: string;
  voicedSoundsKatakana?: string;
  voicedSoundsAudio?: string;
  semiVoicedSoundsHiragana?: string;
  semiVoicedSoundsKatakana?: string;
  semiVoicedSoundsAudio?: string;
};

type Props = {
  char: Charcter;
  isHiragana: boolean;
  voicedSoundsType: VoicedSoundsType;
};

export const Character: React.FC<Props> = ({char, isHiragana, voicedSoundsType}) => {
  const character = createCharacter(char, isHiragana, voicedSoundsType);

  const handleClickButton = (source: string | undefined) => {
    if (source == null) return;
    const audio = new Audio(source);
    audio.play();
  };

  return (
    <button type="button" className={styles.charWrapper} disabled={!character.label} onPointerDown={() => handleClickButton(character.audio)}>
      {character.label && <span className={styles.char}>{character.label}</span>}
    </button>
  );
};

const createCharacter = (char: Charcter, isHiragana: boolean, voicedSounds: VoicedSoundsType) => {
  if (isHiragana) {
    switch (voicedSounds) {
      case "unvoicedSounds":
        return {
          label: char.hiragana,
          audio: char.audio,
        };
      case "voicedSounds":
        return {
          label: char.voicedSoundsHiragana,
          audio: char.voicedSoundsAudio,
        };
      case "semiVoicedSounds":
        return {
          label: char.semiVoicedSoundsHiragana,
          audio: char.semiVoicedSoundsAudio,
        };
    }
  }

  switch (voicedSounds) {
    case "unvoicedSounds":
      return {
        label: char.katakana,
        audio: char.audio,
      };
    case "voicedSounds":
      return {
        label: char.voicedSoundsKatakana,
        audio: char.voicedSoundsAudio,
      };
    case "semiVoicedSounds":
      return {
        label: char.semiVoicedSoundsKatakana,
        audio: char.semiVoicedSoundsAudio,
      };
  }
};
