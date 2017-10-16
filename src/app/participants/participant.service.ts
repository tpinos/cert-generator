import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/Rx';

import { Participant} from './participant.model';


@Injectable()
export class ParticipantService {

  constructor(private httpClient: HttpClient){}
/*
  private participants: Participant[] = [
  { id: 1, name: 'Mr. Nice', email: 'abc@gmail.com', location: 'Amsterdam' },
  { id: 2, name: 'Narco', email: 'abc@gmail.com', location: 'Mexico' },
  { id: 3, name: 'Bombasto', email: 'abc@gmail.com', location: 'India' },
  { id: 4, name: 'Celeritas', email: 'abc@gmail.com', location: 'Japan' },
  { id: 5, name: 'Magneta', email: 'abc@gmail.com', location: 'Madagascar' },
  { id: 6, name: 'RubberMan', email: 'abc@gmail.com', location: 'Italy' },
  { id: 7, name: 'Dynama', email: 'abc@gmail.com', location: 'Toronto' },
  { id: 8, name: 'Dr IQ', email: 'abc@gmail.com', location: 'Amsterdam' },
  { id: 9, name: 'Magma', email: 'abc@gmail.com', location: 'Amsterdam' },
  { id: 10, name: 'Tornado', email: 'abc@gmail.com', location: 'Amsterdam' }
];*/
  private participants: Participant[] = [];
  participantsChanged = new Subject<Participant[]>();


  getParticipants(){
      return this.participants.slice();
  }

  setParticipants(participants: Participant[]){
    this.participants = participants;
    for(let part of this.participants){
      console.log(part['email']);
    }
    this.participantsChanged.next(this.participants.slice());
  }
}
