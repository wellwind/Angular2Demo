import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    {
        path: 'item',
        component: IndexComponent,
        children: [
            { path: ':id', component: ItemDetailComponent },
            { path: '', redirectTo: '/' }
        ]
    },
    { path: 'settings', component: SettingsComponent }
];

export const AppRoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
