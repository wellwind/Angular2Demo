import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'settings', component: SettingsComponent }
];

export const AppRoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
