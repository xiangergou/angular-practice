import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 引入 FormsModule
import { FormsModule } from '@angular/forms';

// 模板
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeroValidateDirective } from './directives/hero-validate.directive';
import { CrossFieldValidateDirective } from './directives/cross-field-validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TemplateDrivenFormsComponent,
    HeroValidateDirective,
    CrossFieldValidateDirective,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
