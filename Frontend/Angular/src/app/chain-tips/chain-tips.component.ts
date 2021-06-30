import { Component, OnInit } from '@angular/core';
import { BlockService } from 'app/service/block.service';
import { ChainTips } from 'Interface/ChainTips';

@Component({
  selector: 'app-chain-tips',
  templateUrl: './chain-tips.component.html',
  styleUrls: ['./chain-tips.component.css']
})
export class ChainTipsComponent implements OnInit {
  tips: ChainTips[]
  constructor(private service: BlockService) { }

  ngOnInit(): void {
    this.getBlockChainTips()
  }

  public getBlockChainTips(){
    let result = this.service.getBlockChainTips()
    console.log(result)
    result.subscribe((data)=>this.tips = data)
    
  }

}
