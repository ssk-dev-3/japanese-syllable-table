import { Charcter } from "../Character";
import aAudio from "../../assets/audio/01_agyo/a.m4a";
import iAudio from "../../assets/audio/01_agyo/i.m4a";
import uAudio from "../../assets/audio/01_agyo/u.m4a";
import eAudio from "../../assets/audio/01_agyo/e.m4a";
import oAudio from "../../assets/audio/01_agyo/o.m4a";

import kaAudio from "../../assets/audio/02_kagyo/ka.m4a";
import kiAudio from "../../assets/audio/02_kagyo/ki.m4a";
import kuAudio from "../../assets/audio/02_kagyo/ku.m4a";
import keAudio from "../../assets/audio/02_kagyo/ke.m4a";
import koAudio from "../../assets/audio/02_kagyo/ko.m4a";

import saAudio from "../../assets/audio/03_sagyo/sa.m4a";
import siAudio from "../../assets/audio/03_sagyo/si.m4a";
import suAudio from "../../assets/audio/03_sagyo/su.m4a";
import seAudio from "../../assets/audio/03_sagyo/se.m4a";
import soAudio from "../../assets/audio/03_sagyo/so.m4a";

import taAudio from "../../assets/audio/04_tagyo/ta.m4a";
import tiAudio from "../../assets/audio/04_tagyo/ti.m4a";
import tuAudio from "../../assets/audio/04_tagyo/tu.m4a";
import teAudio from "../../assets/audio/04_tagyo/te.m4a";
import toAudio from "../../assets/audio/04_tagyo/to.m4a";

import naAudio from "../../assets/audio/05_nagyo/na.m4a";
import niAudio from "../../assets/audio/05_nagyo/ni.m4a";
import nuAudio from "../../assets/audio/05_nagyo/nu.m4a";
import neAudio from "../../assets/audio/05_nagyo/ne.m4a";
import noAudio from "../../assets/audio/05_nagyo/no.m4a";

import haAudio from "../../assets/audio/06_hagyo/ha.m4a";
import hiAudio from "../../assets/audio/06_hagyo/hi.m4a";
import huAudio from "../../assets/audio/06_hagyo/hu.m4a";
import heAudio from "../../assets/audio/06_hagyo/he.m4a";
import hoAudio from "../../assets/audio/06_hagyo/ho.m4a";

import maAudio from "../../assets/audio/07_magyo/ma.m4a";
import miAudio from "../../assets/audio/07_magyo/mi.m4a";
import muAudio from "../../assets/audio/07_magyo/mu.m4a";
import meAudio from "../../assets/audio/07_magyo/me.m4a";
import moAudio from "../../assets/audio/07_magyo/mo.m4a";

import yaAudio from "../../assets/audio/08_yagyo/ya.m4a";
import yuAudio from "../../assets/audio/08_yagyo/yu.m4a";
import yoAudio from "../../assets/audio/08_yagyo/yo.m4a";

import raAudio from "../../assets/audio/09_ragyo/ra.m4a";
import riAudio from "../../assets/audio/09_ragyo/ri.m4a";
import ruAudio from "../../assets/audio/09_ragyo/ru.m4a";
import reAudio from "../../assets/audio/09_ragyo/re.m4a";
import roAudio from "../../assets/audio/09_ragyo/ro.m4a";

import waAudio from "../../assets/audio/10_wagyo/wa.m4a";
import woAudio from "../../assets/audio/10_wagyo/wo.m4a";
import nnAudio from "../../assets/audio/10_wagyo/nn.m4a";

import gaAudio from "../../assets/audio/11_gagyo/ga.m4a";
import giAudio from "../../assets/audio/11_gagyo/gi.m4a";
import guAudio from "../../assets/audio/11_gagyo/gu.m4a";
import geAudio from "../../assets/audio/11_gagyo/ge.m4a";
import goAudio from "../../assets/audio/11_gagyo/go.m4a";

import zaAudio from "../../assets/audio/12_zagyo/za.m4a";
import ziAudio from "../../assets/audio/12_zagyo/zi.m4a";
import zuAudio from "../../assets/audio/12_zagyo/zu.m4a";
import zeAudio from "../../assets/audio/12_zagyo/ze.m4a";
import zoAudio from "../../assets/audio/12_zagyo/zo.m4a";

import daAudio from "../../assets/audio/13_dagyo/da.m4a";
import diAudio from "../../assets/audio/13_dagyo/di.m4a";
import duAudio from "../../assets/audio/13_dagyo/du.m4a";
import deAudio from "../../assets/audio/13_dagyo/de.m4a";
import doAudio from "../../assets/audio/13_dagyo/do.m4a";

import baAudio from "../../assets/audio/14_bagyo/ba.m4a";
import biAudio from "../../assets/audio/14_bagyo/bi.m4a";
import buAudio from "../../assets/audio/14_bagyo/bu.m4a";
import beAudio from "../../assets/audio/14_bagyo/be.m4a";
import boAudio from "../../assets/audio/14_bagyo/bo.m4a";

import paAudio from "../../assets/audio/15_pagyo/pa.m4a";
import piAudio from "../../assets/audio/15_pagyo/pi.m4a";
import puAudio from "../../assets/audio/15_pagyo/pu.m4a";
import peAudio from "../../assets/audio/15_pagyo/pe.m4a";
import poAudio from "../../assets/audio/15_pagyo/po.m4a";

const aColumn:Charcter[] = [
  {
    hiragana: "あ",
    katakana: "ア",
    audio: aAudio,
  },
  {
    hiragana: "い",
    katakana: "イ",
    audio: iAudio,
  },
  {
    hiragana: "う",
    katakana: "ウ",
    audio: uAudio,
  },
  {
    hiragana: "え",
    katakana: "エ",
    audio: eAudio,
  },
  {
    hiragana: "お",
    katakana: "オ",
    audio: oAudio,
  },
]

const kaColumn:Charcter[] = [
  {
    hiragana: "か",
    katakana: "カ",
    audio: kaAudio,
    voicedSoundsHiragana: "が",
    voicedSoundsKatakana: "ガ",
    voicedSoundsAudio: gaAudio,
  },
  {
    hiragana: "き",
    katakana: "キ",
    audio: kiAudio,
    voicedSoundsHiragana: "ぎ",
    voicedSoundsKatakana: "ギ",
    voicedSoundsAudio: giAudio,
  },
  {
    hiragana: "く",
    katakana: "ク",
    audio: kuAudio,
    voicedSoundsHiragana: "ぐ",
    voicedSoundsKatakana: "グ",
    voicedSoundsAudio: guAudio,
  },
  {
    hiragana: "け",
    katakana: "ケ",
    audio: keAudio,
    voicedSoundsHiragana: "げ",
    voicedSoundsKatakana: "ゲ",
    voicedSoundsAudio: geAudio,
  },
  {
    hiragana: "こ",
    katakana: "コ",
    audio: koAudio,
    voicedSoundsHiragana: "ご",
    voicedSoundsKatakana: "ゴ",
    voicedSoundsAudio: goAudio,
  },
]

const saColumn:Charcter[] = [
  {
    hiragana: "さ",
    katakana: "サ",
    audio: saAudio,
    voicedSoundsHiragana: "ざ",
    voicedSoundsKatakana: "ザ",
    voicedSoundsAudio: zaAudio,
  },
  {
    hiragana: "し",
    katakana: "シ",
    audio: siAudio,
    voicedSoundsHiragana: "じ",
    voicedSoundsKatakana: "ジ",
    voicedSoundsAudio: ziAudio,
  },
  {
    hiragana: "す",
    katakana: "ス",
    audio: suAudio,
    voicedSoundsHiragana: "ず",
    voicedSoundsKatakana: "ズ",
    voicedSoundsAudio: zuAudio,
  },
  {
    hiragana: "せ",
    katakana: "セ",
    audio: seAudio,
    voicedSoundsHiragana: "ぜ",
    voicedSoundsKatakana: "ゼ",
    voicedSoundsAudio: zeAudio,
  },
  {
    hiragana: "そ",
    katakana: "ソ",
    audio: soAudio,
    voicedSoundsHiragana: "ぞ",
    voicedSoundsKatakana: "ゾ",
    voicedSoundsAudio: zoAudio,
  },
]

const taColumn:Charcter[] = [
  {
    hiragana: "た",
    katakana: "タ",
    audio: taAudio,
    voicedSoundsHiragana: "だ",
    voicedSoundsKatakana: "ダ",
    voicedSoundsAudio: daAudio,
  },
  {
    hiragana: "ち",
    katakana: "チ",
    audio: tiAudio,
    voicedSoundsHiragana: "ぢ",
    voicedSoundsKatakana: "ヂ",
    voicedSoundsAudio: diAudio,
  },
  {
    hiragana: "つ",
    katakana: "ツ",
    audio: tuAudio,
    voicedSoundsHiragana: "づ",
    voicedSoundsKatakana: "ヅ",
    voicedSoundsAudio: duAudio,
  },
  {
    hiragana: "て",
    katakana: "テ",
    audio: teAudio,
    voicedSoundsHiragana: "で",
    voicedSoundsKatakana: "デ",
    voicedSoundsAudio: deAudio,
  },
  {
    hiragana: "と",
    katakana: "ト",
    audio: toAudio,
    voicedSoundsHiragana: "ど",
    voicedSoundsKatakana: "ド",
    voicedSoundsAudio: doAudio,
  },
]

const naColumn:Charcter[] = [
  {
    hiragana: "な",
    katakana: "ナ",
    audio: naAudio,
  },
  {
    hiragana: "に",
    katakana: "ニ",
    audio: niAudio,
  },
  {
    hiragana: "ぬ",
    katakana: "ヌ",
    audio: nuAudio,
  },
  {
    hiragana: "ね",
    katakana: "ネ",
    audio: neAudio,
  },
  {
    hiragana: "の",
    katakana: "ノ",
    audio: noAudio,
  },
]

const haColumn:Charcter[] = [
  {
    hiragana: "は",
    katakana: "ハ",
    audio: haAudio,
    voicedSoundsHiragana: "ば",
    voicedSoundsKatakana: "バ",
    voicedSoundsAudio: baAudio,
    semiVoicedSoundsHiragana: "ぱ",
    semiVoicedSoundsKatakana: "パ",
    semiVoicedSoundsAudio: paAudio,
  },
  {
    hiragana: "ひ",
    katakana: "ヒ",
    audio: hiAudio,
    voicedSoundsHiragana: "び",
    voicedSoundsKatakana: "ビ",
    voicedSoundsAudio: biAudio,
    semiVoicedSoundsHiragana: "ぴ",
    semiVoicedSoundsKatakana: "ピ",
    semiVoicedSoundsAudio: piAudio,
  },
  {
    hiragana: "ふ",
    katakana: "フ",
    audio: huAudio,
    voicedSoundsHiragana: "ぶ",
    voicedSoundsKatakana: "ブ",
    voicedSoundsAudio: buAudio,
    semiVoicedSoundsHiragana: "ぷ",
    semiVoicedSoundsKatakana: "プ",
    semiVoicedSoundsAudio: puAudio,
  },
  {
    hiragana: "へ",
    katakana: "ヘ",
    audio: heAudio,
    voicedSoundsHiragana: "べ",
    voicedSoundsKatakana: "ベ",
    voicedSoundsAudio: beAudio,
    semiVoicedSoundsHiragana: "ぺ",
    semiVoicedSoundsKatakana: "ペ",
    semiVoicedSoundsAudio: peAudio,
  },
  {
    hiragana: "ほ",
    katakana: "ホ",
    audio: hoAudio,
    voicedSoundsHiragana: "ぼ",
    voicedSoundsKatakana: "ボ",
    voicedSoundsAudio: boAudio,
    semiVoicedSoundsHiragana: "ぽ",
    semiVoicedSoundsKatakana: "ポ",
    semiVoicedSoundsAudio: poAudio,
  },
]

const maColumn:Charcter[] = [
  {
    hiragana: "ま",
    katakana: "マ",
    audio: maAudio,
  },
  {
    hiragana: "み",
    katakana: "ミ",
    audio: miAudio,
  },
  {
    hiragana: "む",
    katakana: "ム",
    audio: muAudio,
  },
  {
    hiragana: "め",
    katakana: "メ",
    audio: meAudio,
  },
  {
    hiragana: "も",
    katakana: "モ",
    audio: moAudio,
  },
]

const yaColumn:Charcter[] = [
  {
    hiragana: "や",
    katakana: "ヤ",
    audio: yaAudio,
  },
  {
    hiragana: "",
    katakana: "",
  },
  {
    hiragana: "ゆ",
    katakana: "ユ",
    audio: yuAudio,
  },
  {
    hiragana: "",
    katakana: "",
  },
  {
    hiragana: "よ",
    katakana: "ヨ",
    audio: yoAudio,
  },
]

const raColumn:Charcter[] = [
  {
    hiragana: "ら",
    katakana: "ラ",
    audio: raAudio,
  },
  {
    hiragana: "り",
    katakana: "リ",
    audio: riAudio,
  },
  {
    hiragana: "る",
    katakana: "ル",
    audio: ruAudio,
  },
  {
    hiragana: "れ",
    katakana: "レ",
    audio: reAudio,
  },
  {
    hiragana: "ろ",
    katakana: "ロ",
    audio: roAudio,
  },
]

const waColumn:Charcter[] = [
  {
    hiragana: "わ",
    katakana: "ワ",
    audio: waAudio,
  },
  {
    hiragana: "",
    katakana: "",
  },
  {
    hiragana: "を",
    katakana: "ヲ",
    audio: woAudio,
  },
  {
    hiragana: "",
    katakana: "",
  },
  {
    hiragana: "ん",
    katakana: "ン",
    audio: nnAudio,
  },
]

export const columnList: Charcter[][] = [
  aColumn,
  kaColumn,
  saColumn,
  taColumn,
  naColumn,
  haColumn,
  maColumn,
  yaColumn,
  raColumn,
  waColumn,
]
