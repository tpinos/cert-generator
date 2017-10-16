import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ParticipantService } from './participants/participant.service';
import { ParticipantDetailComponent } from './participants/participant-detail/participant-detail.component';
import { ParticipantListComponent } from './participants/participant-list/participant-list.component';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantDetailComponent,
    ParticipantListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ParticipantService,
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
