import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent }         from './home-page/home-page.component';
import { CurriculumPageComponent } from './curriculum-page/curriculum-page.component';

const routes: Routes = [
    { path: '',      component: HomePageComponent },
    { path: 'grade', component: CurriculumPageComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
