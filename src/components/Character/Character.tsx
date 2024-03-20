import styles from "./Character.module.scss";

type Props = {
  char: string;
  audioSource?: string;
};

export const Character: React.FC<Props> = ({char, audioSource}) => {
  const handleClickButton = () => {
    const audio = new Audio(audioSource);
    audio.play();
  };

  return (
    <button type="button" className={styles.charWrapper} onClick={handleClickButton}>
      <span className={styles.char}>{char}</span>
    </button>
  );
};
