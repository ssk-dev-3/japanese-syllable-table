import {Character} from "../Character";
import {VoicedSoundsType} from "../VoicedSoundsTypeSwitch/VoicedSoundsTypeSwitch";
import styles from "./SyllableTable.module.scss";
import {columnList} from "./models";

type Props = {
  isHiragana: boolean;
  voicedSoundsType: VoicedSoundsType;
};

export const SyllableTable: React.FC<Props> = ({isHiragana, voicedSoundsType}) => {
  return (
    <div className={styles.tableWrapper}>
      {columnList.map((column, index) => {
        return (
          <div key={index} className={styles.column}>
            {column.map((character, index) => {
              return <Character key={index} char={character} isHiragana={isHiragana} voicedSoundsType={voicedSoundsType}></Character>;
            })}
          </div>
        );
      })}
    </div>
  );
};
