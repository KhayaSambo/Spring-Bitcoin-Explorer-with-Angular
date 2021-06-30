import { Softforks } from "./Softforks";


export interface BlockChainInfo{

    chain: String 
    blocks: Number
    headers: Number
    bestblockhash: String
    difficulty: Number
    mediantime: Number
    verificationprogress: Number
    initialblockdownload: boolean
    chainwork: String
    size_on_disk: Number
    pruned: boolean
    softforks:Softforks
    warnings: String
}