import { Component, OnInit } from '@angular/core';
import { BlockService } from 'app/service/block.service';
import { ValidateAddress } from 'Interface/ValidateAddress';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.css']
})
export class UtilsComponent implements OnInit {

  validateaddress: ValidateAddress
  constructor(private service: BlockService) { }

  ngOnInit(): void {
  }

  public validateAddress(address:string){

    let result = this.service.validateAddress(address)
    result.subscribe((data)=>this.validateaddress = data)
  }

}
