import { AkiCastles } from "./data/chugoku/hiroshima/aki";
import { BingoCastles } from "./data/chugoku/hiroshima/bingo";
import { BinhokuCastles } from "./data/chugoku/hiroshima/binhoku";
import { GeihokuCastles } from "./data/chugoku/hiroshima/geihoku";
import { BiccyuCastles } from "./data/chugoku/okayama/biccyu";
import { BizenCastles } from "./data/chugoku/okayama/bizen";
import { MisakuCastles } from "./data/chugoku/okayama/misaku";
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
import { AwajiCastles } from "./data/kinki/hyogo/awaji";
import { HanshinCastles } from "./data/kinki/hyogo/hanshin";
import { HarimaCastles } from "./data/kinki/hyogo/harima";
import { TajimaCastles } from "./data/kinki/hyogo/tajima";
import { TanbaCastles } from "./data/kinki/hyogo/tanba";
import { KyotoCastles } from "./data/kinki/kyoto/kyoto";
import { NaraCastles } from "./data/kinki/nara/nara";
import { OsakaCastles } from "./data/kinki/osaka/osaka";
import { ShigaCastles } from "./data/kinki/shiga/shiga";
import { WakayamaCastles } from "./data/kinki/wakayama/wakayama";
import { NaganoChushinCastles } from "./data/koushinetsu/nagano/chushin";
import { NaganoHokushinCastles } from "./data/koushinetsu/nagano/hokushin";
import { NaganoNanshinCastles } from "./data/koushinetsu/nagano/nanshin";
import { NaganoToushinCastles } from "./data/koushinetsu/nagano/toushin";
import { NigataCastles } from "./data/koushinetsu/nigata/nigata";
import { YamanashiCastles } from "./data/koushinetsu/yamanashi/yamanashi";
import { ChikugoCastles } from "./data/kyusyu/fukuoka/chikugo";
import { ChikuhouCastles } from "./data/kyusyu/fukuoka/chikuhou";
import { FukuokaCastles } from "./data/kyusyu/fukuoka/fukuoka";
import { KitakyusyuCastles } from "./data/kyusyu/fukuoka/kitakyusyu";
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
import { HigashimikawaCastles } from "./data/tokai/aichi/higashimikawa";
import { NishimikawaCastles } from "./data/tokai/aichi/nishimikawa";
import { OwariCastles } from "./data/tokai/aichi/owari";
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
    chushin: NaganoChushinCastles,
    hokushin: NaganoHokushinCastles,
    nanshin: NaganoNanshinCastles,
    toushin: NaganoToushinCastles,
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
    owari: OwariCastles,
    nishimikawa: NishimikawaCastles,
    higashimikawa: HigashimikawaCastles,
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
    hanshin: HanshinCastles,
    tanba: TanbaCastles,
    tajima: TajimaCastles,
    awaji: AwajiCastles,
    harima: HarimaCastles,
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
    biccyu: BiccyuCastles,
    bizen: BizenCastles,
    misaku: MisakuCastles,
  },
  hiroshima: {
    bingo: BingoCastles,
    binhoku: BinhokuCastles,
    aki: AkiCastles,
    geihoku: GeihokuCastles,
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
    kitakyusyu: KitakyusyuCastles,
    chikuhou: ChikuhouCastles,
    fukuoka: FukuokaCastles,
    chikugo: ChikugoCastles,
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
