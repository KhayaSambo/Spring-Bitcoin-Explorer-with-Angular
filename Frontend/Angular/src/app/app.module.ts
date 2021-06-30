import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BlockService } from './service/block.service';
import { BrowserModule } from '@angular/platform-browser';
import { WalletComponent } from './wallet/wallet.component';
import { UtilsComponent } from './utils/utils.component';
import { ControlComponent } from './control/control.component';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './block/block.component';
import { ChainTipsComponent } from './chain-tips/chain-tips.component';
import { MiningComponent } from './mining/mining.component';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    BlockComponent,
    WalletComponent,
    UtilsComponent,
    ControlComponent,
    ChainTipsComponent,
    MiningComponent,
    
  ],
  providers: [BlockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
