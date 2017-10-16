import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant.service';
import { Participant } from '../participant.model';
import { Subscription } from 'rxjs/Subscription';

import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

  constructor(private participantService: ParticipantService,
              private dataStorageService: DataStorageService) { }

  participants: Participant[] = [];
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.participantService.participantsChanged
      .subscribe(
        (participants: Participant[])=>{
          this.participants = participants;
        }
      );
    this.participants = this.participantService.getParticipants();
    /*for(let participant of this.participants){
      console.log('participante: '+participant['name']);
    }*/

    /*this.participantService.getParticipants()
      .subscribe(
        (participants: Participant[]) => {
          this.participants = participants;
        }
      );*/
    //console.log('los participants:'+this.participants);
  }

  onFetchData() {
    console.log('onFetchData');
      /*this.subscription = this.participantService.getParticipants().subscribe(
      (participants: Participant[])=>{
        this.participants = participants;
      }
    );*/
    this.dataStorageService.getParticipants();
    console.log('fetch '+this.participants);
  }

}
