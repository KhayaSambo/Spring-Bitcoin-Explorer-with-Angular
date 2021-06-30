export interface Block{
    bestHash: string
    hash: string;
    confirmations: number;
    strippedsize: number;
    size: number;
    weight: number;
    height: number;
    version: number;
    versionHex: string;
    merkleroot: string;
    tx: string[];
    time: any;
    mediantime: any;
    nonce: any;
    bits: string;
    difficulty: number;
    chainwork: string;
    nTx: number;
    nextblock: string;
    wallet: String;

}