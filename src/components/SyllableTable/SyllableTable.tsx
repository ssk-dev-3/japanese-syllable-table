import {Character} from "../Character";
import styles from "./SyllableTable.module.scss";

import a from "../../assets/audio/01_agyo/a.m4a";
import i from "../../assets/audio/01_agyo/i.m4a";
import u from "../../assets/audio/01_agyo/u.m4a";
import e from "../../assets/audio/01_agyo/e.m4a";
import o from "../../assets/audio/01_agyo/o.m4a";

import ka from "../../assets/audio/02_kagyo/ka.m4a";
import ki from "../../assets/audio/02_kagyo/ki.m4a";
import ku from "../../assets/audio/02_kagyo/ku.m4a";
import ke from "../../assets/audio/02_kagyo/ke.m4a";
import ko from "../../assets/audio/02_kagyo/ko.m4a";

import sa from "../../assets/audio/03_sagyo/sa.m4a";
import si from "../../assets/audio/03_sagyo/si.m4a";
import su from "../../assets/audio/03_sagyo/su.m4a";
import se from "../../assets/audio/03_sagyo/se.m4a";
import so from "../../assets/audio/03_sagyo/so.m4a";

import ta from "../../assets/audio/04_tagyo/ta.m4a";
import ti from "../../assets/audio/04_tagyo/ti.m4a";
import tu from "../../assets/audio/04_tagyo/tu.m4a";
import te from "../../assets/audio/04_tagyo/te.m4a";
import to from "../../assets/audio/04_tagyo/to.m4a";

import na from "../../assets/audio/05_nagyo/na.m4a";
import ni from "../../assets/audio/05_nagyo/ni.m4a";
import nu from "../../assets/audio/05_nagyo/nu.m4a";
import ne from "../../assets/audio/05_nagyo/ne.m4a";
import no from "../../assets/audio/05_nagyo/no.m4a";

import ha from "../../assets/audio/06_hagyo/ha.m4a";
import hi from "../../assets/audio/06_hagyo/hi.m4a";
import hu from "../../assets/audio/06_hagyo/hu.m4a";
import he from "../../assets/audio/06_hagyo/he.m4a";
import ho from "../../assets/audio/06_hagyo/ho.m4a";

import ma from "../../assets/audio/07_magyo/ma.m4a";
import mi from "../../assets/audio/07_magyo/mi.m4a";
import mu from "../../assets/audio/07_magyo/mu.m4a";
import me from "../../assets/audio/07_magyo/me.m4a";
import mo from "../../assets/audio/07_magyo/mo.m4a";

import ya from "../../assets/audio/08_yagyo/ya.m4a";
import yu from "../../assets/audio/08_yagyo/yu.m4a";
import yo from "../../assets/audio/08_yagyo/yo.m4a";

import ra from "../../assets/audio/09_ragyo/ra.m4a";
import ri from "../../assets/audio/09_ragyo/ri.m4a";
import ru from "../../assets/audio/09_ragyo/ru.m4a";
import re from "../../assets/audio/09_ragyo/re.m4a";
import ro from "../../assets/audio/09_ragyo/ro.m4a";

import wa from "../../assets/audio/10_wagyo/wa.m4a";
import wo from "../../assets/audio/10_wagyo/wo.m4a";
import nn from "../../assets/audio/10_wagyo/nn.m4a";

type Props = {
  isHiragana: boolean;
};

export const SyllableTable: React.FC<Props> = ({isHiragana}) => {
  return (
    <div className={styles.table}>
      <div className={styles.characterLineWrapper}>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "わ" : "ワ"} audioSource={wa}></Character>
          <Character char={isHiragana ? "" : ""}></Character>
          <Character char={isHiragana ? "を" : "ヲ"} audioSource={wo}></Character>
          <Character char={isHiragana ? "" : ""}></Character>
          <Character char={isHiragana ? "ん" : "ン"} audioSource={nn}></Character>
        </div>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "ら" : "ラ"} audioSource={ra}></Character>
          <Character char={isHiragana ? "り" : "リ"} audioSource={ri}></Character>
          <Character char={isHiragana ? "る" : "ル"} audioSource={ru}></Character>
          <Character char={isHiragana ? "れ" : "レ"} audioSource={re}></Character>
          <Character char={isHiragana ? "ろ" : "ロ"} audioSource={ro}></Character>
        </div>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "や" : "ヨ"} audioSource={ya}></Character>
          <Character char={isHiragana ? "" : ""}></Character>
          <Character char={isHiragana ? "ゆ" : "ユ"} audioSource={yu}></Character>
          <Character char={isHiragana ? "" : ""}></Character>
          <Character char={isHiragana ? "よ" : "ヨ"} audioSource={yo}></Character>
        </div>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "ま" : "マ"} audioSource={ma}></Character>
          <Character char={isHiragana ? "み" : "ミ"} audioSource={mi}></Character>
          <Character char={isHiragana ? "む" : "ム"} audioSource={mu}></Character>
          <Character char={isHiragana ? "め" : "メ"} audioSource={me}></Character>
          <Character char={isHiragana ? "も" : "モ"} audioSource={mo}></Character>
        </div>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "は" : "ハ"} audioSource={ha}></Character>
          <Character char={isHiragana ? "ひ" : "ヒ"} audioSource={hi}></Character>
          <Character char={isHiragana ? "ふ" : "フ"} audioSource={hu}></Character>
          <Character char={isHiragana ? "へ" : "ヘ"} audioSource={he}></Character>
          <Character char={isHiragana ? "ほ" : "ホ"} audioSource={ho}></Character>
        </div>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "な" : "ナ"} audioSource={na}></Character>
          <Character char={isHiragana ? "に" : "ニ"} audioSource={ni}></Character>
          <Character char={isHiragana ? "ぬ" : "ヌ"} audioSource={nu}></Character>
          <Character char={isHiragana ? "ね" : "ネ"} audioSource={ne}></Character>
          <Character char={isHiragana ? "の" : "ノ"} audioSource={no}></Character>
        </div>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "た" : "タ"} audioSource={ta}></Character>
          <Character char={isHiragana ? "ち" : "チ"} audioSource={ti}></Character>
          <Character char={isHiragana ? "つ" : "ツ"} audioSource={tu}></Character>
          <Character char={isHiragana ? "て" : "テ"} audioSource={te}></Character>
          <Character char={isHiragana ? "と" : "ト"} audioSource={to}></Character>
        </div>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "さ" : "サ"} audioSource={sa}></Character>
          <Character char={isHiragana ? "し" : "シ"} audioSource={si}></Character>
          <Character char={isHiragana ? "す" : "ス"} audioSource={su}></Character>
          <Character char={isHiragana ? "せ" : "セ"} audioSource={se}></Character>
          <Character char={isHiragana ? "そ" : "ソ"} audioSource={so}></Character>
        </div>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "か" : "カ"} audioSource={ka}></Character>
          <Character char={isHiragana ? "き" : "キ"} audioSource={ki}></Character>
          <Character char={isHiragana ? "く" : "ク"} audioSource={ku}></Character>
          <Character char={isHiragana ? "け" : "ケ"} audioSource={ke}></Character>
          <Character char={isHiragana ? "こ" : "コ"} audioSource={ko}></Character>
        </div>
        <div className={styles.characterLine}>
          <Character char={isHiragana ? "あ" : "ア"} audioSource={a}></Character>
          <Character char={isHiragana ? "い" : "イ"} audioSource={i}></Character>
          <Character char={isHiragana ? "う" : "ウ"} audioSource={u}></Character>
          <Character char={isHiragana ? "え" : "エ"} audioSource={e}></Character>
          <Character char={isHiragana ? "お" : "オ"} audioSource={o}></Character>
        </div>
      </div>
    </div>
  );
};
