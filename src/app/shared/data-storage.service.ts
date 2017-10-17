import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';

import { ParticipantService } from '../participants/participant.service';
import { Participant } from '../participants/participant.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private participantService: ParticipantService) {
  }
  private urlParticipants = 'https://ggj-cert-generator.firebaseio.com/participants.json'; // change to a node participant

  getParticipants(){
    //console.log('getParticipants'+this.participants);

    this.httpClient.get<Participant[]>(this.urlParticipants, {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (participants)=>{
          console.log(participants);
          return participants;
        }
      ).subscribe(
        (participants:Participant[]) => {
          this.participantService.setParticipants(participants);
        }
      );
  }
}
