import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ChainTipsComponent } from './chain-tips.component';


@NgModule({
  
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule
        ],
        declarations: [
            ChainTipsComponent
        ],
    exports: [
        ChainTipsComponent
      ]

})
export class ChainTipsModule{}
