import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    imports: [
        RouterModule.forRoot([{
            path: '',
            component: IndexComponent
        }, {
            path: 'item',
            component: IndexComponent,
            children: [{
                path: ':id',
                component: ItemDetailComponent
            }, {
                path: '',
                redirectTo: '/'
            }]
        }, {
            path: 'settings',
            loadChildren: 'app/settings/settings.module#SettingsModule'
        }], {
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}