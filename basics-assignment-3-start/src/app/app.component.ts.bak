import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPwd:boolean=false;
  log=[];

  setTimeStamp(){
   let now = new Date();
   return now.getHours().toString()+':'+now.getMinutes().toString()+':'+now.getSeconds().toString()+':'+now.getMilliseconds()+'-'+now.getDay().toString()+'/'+now.getMonth()+'/'+now.getFullYear().toString();
  };

  setLog(){
    this.log.push(this.setTimeStamp());
  }

  displayDetails(){
    this.setLog();
    if (!this.showPwd){
      this.showPwd=true;
    }else{
      this.showPwd=false
    }
  };
}
