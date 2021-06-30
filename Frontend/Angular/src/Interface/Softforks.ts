import { Bip } from "./Bip";
import { TapRoot } from "./TapRoot";


export interface Softforks{
     bip34:Bip
     bip66: Bip
     bip65: Bip
     csv: Bip
     segwit: Bip
     taproot: TapRoot
}

