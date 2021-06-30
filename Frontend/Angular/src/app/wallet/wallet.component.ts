import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BlockService } from 'app/service/block.service';
import { WalletInfo } from 'Interface/WalletInfo';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],

})
export class WalletComponent implements OnInit {
  toggleProperty; toggleProperty1 = false;

  wallets:string
  walletInfo: WalletInfo
  balance: Number

  constructor(private service:BlockService) { }

  ngOnInit(): void {
  }
  public listWallets(){
    let result = this.service.listWallets()
    console.log(result)
  
    result.subscribe((data)=>this.wallets = data)
  }

  public getWalletInfo(){
    let result = this.service.getWalletInfo()
    console.log(result)
    result.subscribe((data)=>this.walletInfo = data)

  }

  public getBalance(){
    let result = this.service.getBalance()
    console.log(result)
    result.subscribe((data)=>this.balance = data)
  }

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }

 
}
