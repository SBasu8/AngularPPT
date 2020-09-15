import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  if_clicked_newnormal: boolean = false;
  if_clicked_learn: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  startComp() { this.if_clicked_newnormal=true; }
  startLearn() { this.if_clicked_learn = true;}
  goToLearnings(){this.router.navigateByUrl("learnings"); }

}
