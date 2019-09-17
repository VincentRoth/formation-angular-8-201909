import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsultationModule } from './consultation/consultation.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimeInterceptor } from './shared/time-interceptor';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConsultationModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
