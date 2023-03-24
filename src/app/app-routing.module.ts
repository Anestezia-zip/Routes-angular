import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { CenzorComponent } from './components/works/cenzor/cenzor.component';
import { UserlistComponent } from './components/works/userlist/userlist.component';
import { TasklistComponent } from './components/works/tasklist/tasklist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent },
    { path: 'tasklist', component: TasklistComponent },
    { path: 'userlist', component: UserlistComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
