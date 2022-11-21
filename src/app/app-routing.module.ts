import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


const routes: Routes = [
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
