import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  if_clicked_thrice: boolean =false;
  click_times:number=1;
  msg: string="";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCampus()
  {
    if(this.click_times>=3) {this.if_clicked_thrice=true;this.msg="";}
    else {
      this.click_times+=1; 
      this.msg="You try to go in but aren't allowed !!";
      if(this.click_times==2) document.getElementById("msg").style.color = "orange";
      if(this.click_times==3) document.getElementById("msg").style.color = "red";
    }
  }

  goBackHome()
  {
    this.router.navigateByUrl("athome");
  }

}
