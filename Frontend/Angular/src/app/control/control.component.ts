import { Component, OnInit } from '@angular/core';
import { BlockService } from 'app/service/block.service';
import { RPCInfo } from 'Interface/RPCInfo';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private service: BlockService) { }

  rpcInfo: RPCInfo
  uptime: Number

  ngOnInit(): void {

  }

  public getRPCInfo(){
    let result = this.service.getRPCInfo()
    console.log(result)
    result.subscribe((data)=>this.rpcInfo = data)

  }


  public getUptime(){
    let result = this.service.uptime()
    console.log(result)
    result.subscribe((data)=>this.uptime = data)

  }
}
