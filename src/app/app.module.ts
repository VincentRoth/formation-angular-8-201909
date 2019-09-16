import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultationModule } from './consultation/consultation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ConsultationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
