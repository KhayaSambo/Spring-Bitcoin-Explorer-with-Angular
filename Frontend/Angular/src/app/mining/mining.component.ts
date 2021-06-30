import { Component, OnInit } from '@angular/core';
import { BlockService } from 'app/service/block.service';
import { MiningInfo } from 'Interface/MiningInfo';


@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {
  miningInfo: MiningInfo
  constructor(private service:BlockService) { }

  ngOnInit(): void {
  }


  public getMiningInfo(){
    let result = this.service.getMiningInfo()
    result.subscribe((data)=>this.miningInfo = data)
  }
}
