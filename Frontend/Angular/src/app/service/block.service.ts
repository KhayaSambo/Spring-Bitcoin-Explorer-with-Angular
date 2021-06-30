import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BaseEntity } from 'Interface/BaseEntity';
import { Block } from 'Interface/Block';
import { BlockChainInfo } from 'Interface/BlockChainInfo';
import { ChainTips } from 'Interface/ChainTips';
import { MemPool } from 'Interface/MemPool';
import { MiningInfo } from 'Interface/MiningInfo';
import { RPCInfo } from 'Interface/RPCInfo';
import { ValidateAddress } from 'Interface/ValidateAddress';
import { WalletInfo } from 'Interface/WalletInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  


  public getBlock(hash:string): Observable<Block> {
    return this.http.get<Block>(`${this.apiServerUrl}/block/${hash}`)
  }

  public getBlockHash(height:Number): Observable<string> {
    return this.http.get(`${this.apiServerUrl}/blockhash/${height}`, {
     responseType: 'text'
   })
  }
  public getBlockChainInfo(): Observable<BlockChainInfo> {
    return this.http.get<BlockChainInfo>(`${this.apiServerUrl}/blockchaininfo` )
  }

  public getNewAddress(label:string, address_type:string): Observable<string> {
    return this.http.get(`${this.apiServerUrl}/NewAddress/${label}/${address_type}`, {responseType : 'text'})
  }
  public getBlockCount(): Observable<Number> {
    return this.http.get<Number>(`${this.apiServerUrl}/blockcount`)
  }
  public getBestBlockHash(): Observable<string> {
    return this.http.get(`${this.apiServerUrl}/bestblockhash`,  {responseType : 'text'})
  }
  public getDifficulty(): Observable<Number> {
    return this.http.get<Number>(`${this.apiServerUrl}/difficulty`)
  }
 public getWallets(): Observable<string>{
   return this.http.get(`${this.apiServerUrl}/wallets`, {responseType : 'text'})
 }

 public getBlockChainTips(): Observable<ChainTips[]>{
  return this.http.get<ChainTips[]>(`${this.apiServerUrl}/getblockchaintips`)
}

public getMemPoolInfo(): Observable<MemPool>{
  return this.http.get<MemPool>(`${this.apiServerUrl}/getmempoolinfo`)
}
public listWallets(): Observable<string>{
  return this.http.get(`${this.apiServerUrl}/listwallets`, {responseType:'text'})
}

public getWalletInfo(): Observable<WalletInfo>{
  return this.http.get<WalletInfo>(`${this.apiServerUrl}/walletinfo`)
}
public getBalance(): Observable<Number>{
  return this.http.get<Number>(`${this.apiServerUrl}/getbalance`)
}

public getRPCInfo(): Observable<RPCInfo>{
  return this.http.get<RPCInfo>(`${this.apiServerUrl}/getrpcinfo`)
}

public uptime(): Observable<Number>{
  return this.http.get<Number>(`${this.apiServerUrl}/uptime`)
}

public validateAddress(address:string): Observable<ValidateAddress> {
  return this.http.get<ValidateAddress>(`${this.apiServerUrl}/validateaddress`)
}

public getMiningInfo(): Observable<MiningInfo>{
  return this.http.get<MiningInfo>(`${this.apiServerUrl}/getmininginfo`)
}
}
