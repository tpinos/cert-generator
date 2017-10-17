import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipantListComponent } from './participants/participant-list/participant-list.component';
import { ParticipantStartComponent } from './participants/participant-start/participant-start.component';
import { ParticipantDetailComponent } from './participants/participant-detail/participant-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'/participants', pathMatch: 'full'},
  {path: 'participants', component: ParticipantListComponent, children: [
    {path:'', component:ParticipantStartComponent},
    {path:':id', component:ParticipantDetailComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule ]

})
export class AppRoutingModule {

}
