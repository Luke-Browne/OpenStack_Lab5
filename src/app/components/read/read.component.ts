import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Tutorial } from '../../Models/tutorial.model';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import * as TutorialActions from '../../Actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {

    this.tutorials = store.select('tutorial')

   }

  ngOnInit(): void {
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }

}
