import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [WrapperComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class WrapperModule { }