import { Component, OnInit } from '@angular/core';
import { BlockService } from 'app/service/block.service';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Block } from 'Interface/Block';
import { WalletInfo } from 'Interface/WalletInfo';
import { ChainTips } from 'Interface/ChainTips';
import { MemPool } from 'Interface/MemPool';
import { RPCInfo } from 'Interface/RPCInfo';
import { BaseEntity } from 'Interface/BaseEntity';
import { BlockChainInfo } from 'Interface/BlockChainInfo';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  toggleProperty = false;
  toggleProperty1 = false;
  toggleProperty2 = false;
  toggleProperty3 = false;
  toggleProperty4 = false;
  toggleProperty5 = false;
  toggleProperty6 = false;
  toggleProperty7 = false;
  toggleProperty8 = false;
  toggleProperty9 = false;
  
  block: Block
  rpcinfo: RPCInfo
  poolInfo: MemPool
  wallets: WalletInfo
  info: BlockChainInfo
  walletInfo: WalletInfo
  preciousBlock: null
  blockHash: string
  bestHash: string
  address:string
  hash: string
  count: Number
  uptime: Number
  balance: Number
  difficulty: Number
  

  constructor(public service: BlockService) { }
  
  ngOnInit(): void {

  }

  public getBlock(hash:string){
    let result = this.service.getBlock(hash)
    console.log(result)
    result.subscribe((data)=> this.block = data)
    this.toggle(1)

  }

  public getBlockHash(height:Number){
    let result = this.service.getBlockHash(height)
    console.log(result)
    result.subscribe((data)=> this.blockHash = data)
    this.toggle(0)
  }

  public toggle(toggleval:Number){

    switch (toggleval) {
      case 0 :
        this.toggleProperty = !this.toggleProperty;
        break;
      case 1 :
        this.toggleProperty1 = !this.toggleProperty1;
        break;
      case 2 :
      this.toggleProperty2 = !this.toggleProperty2;
      break;
      case 3 :
        this.toggleProperty3 = !this.toggleProperty3;
        break;
      case 4 :
      this.toggleProperty4 = !this.toggleProperty4;
      break;
      case 5 :
        this.toggleProperty5 = !this.toggleProperty5;
        break;
      case 6 :
      this.toggleProperty6 = !this.toggleProperty6;
      break;
      case 7 :
        this.toggleProperty7 = !this.toggleProperty7;
        break;
      case 8 :
      this.toggleProperty8 = !this.toggleProperty8;
      break;
      case 9 :
        this.toggleProperty9 = !this.toggleProperty9;
        break;
      default:
        break;
    }

  }

  public getBlockChainInfo(){
    let result = this.service.getBlockChainInfo()
    result.subscribe((data)=> this.info = data)
    this.toggle(7)
  }

  public getDifficulty(){
    let result = this.service.getDifficulty()
    console.log(result)
    result.subscribe((data)=> this.difficulty = data)
    this.toggle(8)
  }

  public getBestBlockHash(){
    let result = this.service.getBestBlockHash()
    console.log(result)
    result.subscribe((data)=> this.bestHash = data)
    this.toggle(4)
  }

  public getMemPoolInfo(){
    let result = this.service.getMemPoolInfo()
    console.log(result)
    result.subscribe((data)=>this.poolInfo = data)
    this.toggle(9)
  }


  public getRPCInfo(){
    let result = this.service.getRPCInfo()
    console.log(result)
    result.subscribe((data)=>this.rpcinfo = data)
   
  }

  public getNewAddress(label:string, address_type:string){
      let result = this.service.getNewAddress(label,address_type)
      console.log(result)
      result.subscribe((data)=>this.address = data)
      this.toggle(3)
  }
  public getBlockCount(){
    let result = this.service.getBlockCount()
    console.log(result)
    result.subscribe((data)=>this.count = data)
    this.toggle(5)
}
}
