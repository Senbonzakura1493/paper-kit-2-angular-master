import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/appServices'

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  schoolYears : any ;

  constructor(private appService : AppService) {
    this.appService.getSchoolYears().subscribe((data:any)=>
    { 
      
       this.schoolYears = data;
       console.log(this.schoolYears) 
      
    });
  
  
  }
  

  ngOnInit() {

    
  }

}
