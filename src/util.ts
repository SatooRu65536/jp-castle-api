import { HiroshimaCastles } from "./data/chugoku/hiroshima/hiroshima";
import { OkayamaCastles } from "./data/chugoku/okayama/okayama";
import { ShimaneCastles } from "./data/chugoku/shimane/shimane";
import { TottoriCastles } from "./data/chugoku/tottori/tottori";
import { YamaguchiCastles } from "./data/chugoku/yamaguchi/yamaguchi";
import { FukuiCastles } from "./data/hokuriku/fukui/fukui";
import { IshikawaCastles } from "./data/hokuriku/ishikawa/ishikawa";
import { ToyamaCastles } from "./data/hokuriku/toyama/toyama";
import { ChibaCastles } from "./data/kanto/chiba/chiba";
import { GunmaCastles } from "./data/kanto/gunma/gunma";
import { IbarakiCastles } from "./data/kanto/ibaraki/ibaraki";
import { KanagawaCastles } from "./data/kanto/kanagawa/kanagawa";
import { SaitamaCastles } from "./data/kanto/saitama/saitama";
import { TochigiCastles } from "./data/kanto/tochigi/tochigi";
import { TokyoCastles } from "./data/kanto/tokyo/tokyo";
import { HyogoCastles } from "./data/kinki/hyogo/hyogo";
import { KyotoCastles } from "./data/kinki/kyoto/kyoto";
import { NaraCastles } from "./data/kinki/nara/nara";
import { OsakaCastles } from "./data/kinki/osaka/osaka";
import { ShigaCastles } from "./data/kinki/shiga/shiga";
import { WakayamaCastles } from "./data/kinki/wakayama/wakayama";
import { NaganoCastles } from "./data/koushinnetsu/nagano/nagano";
import { NigataCastles } from "./data/koushinnetsu/nigata/nigata";
import { YamanashiCastles } from "./data/koushinnetsu/yamanashi/yamanashi";
import { FukuokaCastles } from "./data/kyusyu/fukuoka/fukuoka";
import { KagoshimaCastles } from "./data/kyusyu/kagoshima/kagoshima";
import { KumamotoCastles } from "./data/kyusyu/kumamoto/kumamoto";
import { MiyazakiCastles } from "./data/kyusyu/miyazaki/miyazaki";
import { NagasakiCastles } from "./data/kyusyu/nagasaki/nagasaki";
import { OitaCastles } from "./data/kyusyu/oita/oita";
import { OkinawaCastles } from "./data/kyusyu/okinawa/okinawa";
import { SagaCastles } from "./data/kyusyu/saga/saga";
import { EhimeCastles } from "./data/shikoku/ehime/ehime";
import { KagawaCastles } from "./data/shikoku/kagawa/kagawa";
import { KouchiCastles } from "./data/shikoku/kouchi/kouchi";
import { TokushimaCastles } from "./data/shikoku/tokushima/tokushima";
import { AkitaCastles } from "./data/tohoku/akita/akita";
import { AomoriCastles } from "./data/tohoku/aomori/aomori";
import { FukushimaCastles } from "./data/tohoku/fukushima/fukushima";
import { HokkaidoCastles } from "./data/tohoku/hokkaido/hokkaido";
import { IwateCastles } from "./data/tohoku/iwate/iwate";
import { MiyagiCastles } from "./data/tohoku/miyagi/miyagi";
import { YamagataCastles } from "./data/tohoku/yamagata/yamagata";
import { AichiCastles } from "./data/tokai/aichi/aichi";
import { GifuCastles } from "./data/tokai/gifu/gifu";
import { MieCastles } from "./data/tokai/mie/mie";
import { JPCastlesType } from "./types/areas";

export const JPCastles: JPCastlesType = {
  hokkaido: {
    hokkaido: HokkaidoCastles,
  },
  aomori: {
    aomori: AomoriCastles,
  },
  iwate: {
    iwate: IwateCastles,
  },
  miyagi: {
    miyagi: MiyagiCastles,
  },
  akita: {
    akita: AkitaCastles,
  },
  yamagata: {
    yamagata: YamagataCastles,
  },
  fukushima: {
    fukushima: FukushimaCastles,
  },
  ibaraki: {
    ibaraki: IbarakiCastles,
  },
  tochigi: {
    tochigi: TochigiCastles,
  },
  gunma: {
    gunma: GunmaCastles,
  },
  saitama: {
    saitama: SaitamaCastles,
  },
  chiba: {
    chiba: ChibaCastles,
  },
  tokyo: {
    tokyo: TokyoCastles,
  },
  kanagawa: {
    kanagawa: KanagawaCastles,
  },
  nigata: {
    nigata: NigataCastles,
  },
  nagano: {
    nagano: NaganoCastles,
  },
  yamanashi: {
    yamanashi: YamanashiCastles,
  },
  toyama: {
    toyama: ToyamaCastles,
  },
  ishikawa: {
    ishikawa: IshikawaCastles,
  },
  fukui: {
    fukui: FukuiCastles,
  },
  shizuoka: {
    shizuoka: ShimaneCastles,
  },
  gifu: {
    gifu: GifuCastles,
  },
  aichi: {
    aichi: AichiCastles,
  },
  mie: {
    mie: MieCastles,
  },
  shiga: {
    shiga: ShigaCastles,
  },
  kyoto: {
    kyoto: KyotoCastles,
  },
  osaka: {
    osaka: OsakaCastles,
  },
  hyogo: {
    hyogo: HyogoCastles,
  },
  nara: {
    nara: NaraCastles,
  },
  wakayama: {
    wakayama: WakayamaCastles,
  },
  tottori: {
    tottori: TottoriCastles,
  },
  shimane: {
    shimane: ShimaneCastles,
  },
  okayama: {
    okayama: OkayamaCastles,
  },
  hiroshima: {
    hiroshima: HiroshimaCastles,
  },
  yamaguchi: {
    yamaguchi: YamaguchiCastles,
  },
  tokushima: {
    tokushima: TokushimaCastles,
  },
  kagawa: {
    kagawa: KagawaCastles,
  },
  ehime: {
    ehime: EhimeCastles,
  },
  kouchi: {
    kouchi: KouchiCastles,
  },
  fukuoka: {
    fukuoka: FukuokaCastles,
  },
  saga: {
    saga: SagaCastles,
  },
  nagasaki: {
    nagasaki: NagasakiCastles,
  },
  kumamoto: {
    kumamoto: KumamotoCastles,
  },
  oita: {
    oita: OitaCastles,
  },
  miyazaki: {
    miyazaki: MiyazakiCastles,
  },
  kagoshima: {
    kagoshima: KagoshimaCastles,
  },
  okinawa: {
    okinawa: OkinawaCastles,
  },
};
