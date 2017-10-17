import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ParticipantService } from './participants/participant.service';
import { ParticipantDetailComponent } from './participants/participant-detail/participant-detail.component';
import { ParticipantListComponent } from './participants/participant-list/participant-list.component';
import { DataStorageService } from './shared/data-storage.service';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { ParticipantStartComponent } from './participants/participant-start/participant-start.component';
import { CertificateViewComponent } from './certificates/certificate-view/certificate-view.component'

@NgModule({
  declarations: [
    AppComponent,
    ParticipantDetailComponent,
    ParticipantListComponent,
    HeaderComponent,
    ParticipantStartComponent,
    CertificateViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ParticipantService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
