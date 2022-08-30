import { ProjectComponent } from './views/project/project.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { DescriptionComponent } from './views/description/description.component';

const routes: Routes = [{

  path: '',
  pathMatch: 'full',
  component: HomeComponent
},{
  path:'contact',
  component: ContactComponent
},{
  path:'project',
  component: ProjectComponent
},{
  path:'description',
  component: DescriptionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
