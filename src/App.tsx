import {useState} from "react";
import {KanaTypeSwitch} from "./components/KanaTypeSwitch";
import {SyllableTable} from "./components/SyllableTable";
import styles from "./App.module.scss";

function App() {
  const [isHiragana, setIsHiragana] = useState(true);

  const handleClickRadio = (isHiragana: boolean) => {
    setIsHiragana(isHiragana);
  };

  return (
    <div className={styles.appWrapper}>
      <SyllableTable isHiragana={isHiragana} />
      <KanaTypeSwitch isHiragana={isHiragana} onChangeRadio={handleClickRadio} />
    </div>
  );
}

export default App;
