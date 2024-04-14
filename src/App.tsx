import {useState} from "react";
import {KanaTypeSwitch} from "./components/KanaTypeSwitch";
import {SyllableTable} from "./components/SyllableTable";
import styles from "./App.module.scss";
import {VoicedSoundsType, VoicedSoundsTypeSwitch} from "./components/VoicedSoundsTypeSwitch/VoicedSoundsTypeSwitch";

function App() {
  const [isHiragana, setIsHiragana] = useState(true);
  const [voicedSoundsType, setVouicedSoundsType] = useState<VoicedSoundsType>("unvoicedSounds");

  const handleChangeKanaType = (isHiragana: boolean) => {
    setIsHiragana(isHiragana);
  };

  const handleVoicedScoundsType = (type: VoicedSoundsType) => {
    setVouicedSoundsType(type);
  };

  return (
    <div className={styles.appWrapper}>
      <SyllableTable isHiragana={isHiragana} voicedSoundsType={voicedSoundsType} />
      <div className={styles.switchWrapper}>
        <KanaTypeSwitch isHiragana={isHiragana} onChange={handleChangeKanaType} />
        <VoicedSoundsTypeSwitch type={voicedSoundsType} onChange={handleVoicedScoundsType} />
      </div>
    </div>
  );
}

export default App;
