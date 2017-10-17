import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Participant } from '../participant.model';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-detail',
  templateUrl: './participant-detail.component.html',
  styleUrls: ['./participant-detail.component.css']
})
export class ParticipantDetailComponent implements OnInit {
  participant: Participant;
  id: number;

  constructor(private participantService: ParticipantService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log('detail id ->'+ this.id );
          this.participant = this.participantService.getParticipant(this.id);
        }
      );
  }

  
}
