import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { BlockComponent } from '../../block/block.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { WalletComponent } from 'app/wallet/wallet.component';
import { UtilsComponent } from 'app/utils/utils.component';
import { ControlComponent } from 'app/control/control.component';
import { ChainTipsComponent } from 'app/chain-tips/chain-tips.component';
import { MiningComponent } from 'app/mining/mining.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'welcome',       component: HomeComponent },
    { path: 'user',       component: UserComponent },
    { path: 'block',      component: BlockComponent },
    { path: 'wallet',     component: WalletComponent },
    { path: 'control',     component: ControlComponent },
    { path: 'utils',  component: UtilsComponent },
    { path: 'mining',  component: MiningComponent },

];
