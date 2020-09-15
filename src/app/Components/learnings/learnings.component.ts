import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learnings',
  templateUrl: './learnings.component.html',
  styleUrls: ['./learnings.component.css']
})
export class LearningsComponent implements OnInit {

  is_back_state: boolean=false;
  is_next_state: boolean=true;
  slide_no: number = 0;

  slide_state:boolean[] = [true,false,false,false,false,false,false,false,false,false]

  constructor() { }

  ngOnInit(): void {
  }

  next()
  {
    this.slide_no+=1;
    this.slide_state[this.slide_no-1]=false;
    this.slide_state[this.slide_no]=true;
    this.is_back_state=true;
    if(this.slide_no>=10) this.is_next_state=false;
  }

  back()
  {
    this.slide_no-=1;
    this.slide_state[this.slide_no+1]=false;
    this.slide_state[this.slide_no]=true;
    this.is_next_state=true;
    if(this.slide_no<=0) this.is_back_state=false;
  }

}
