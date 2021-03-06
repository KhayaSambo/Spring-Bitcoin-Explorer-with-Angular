import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BlockComponent } from './block.component';

@NgModule({
  
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule
        ],
        declarations: [
            BlockComponent
        ],
    exports: [
        BlockComponent
      ]

})
export class BlockModule{}
