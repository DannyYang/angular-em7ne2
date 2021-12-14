import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
    <app-voter *ngFor="let user of userList"
      [user]="user"
      (voted)="onVoted($event)"
      
      >
    </app-voter>
  `,
})

// (voted)="onVoted($event)" // (test)="onTest($event)"
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];
  userList = [
    { name: 'a', age: 32, vote: null },
    { name: 'b', age: 23, vote: null },
    { name: 'c', age: 21, vote: null },
  ];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  // onTest(agreed: boolean) {
  //   agreed ? this.agreed++ : this.disagreed++;
  // }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
