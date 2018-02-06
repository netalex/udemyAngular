import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers:number[]=[];
  evenNumbers:number[]=[];
  onGetNumber(event){
    console.log('event: '+event)
    if (event %2 === 0){
      this.evenNumbers.push(event);
    }else {
      this.oddNumbers.push(event);
    }
  }
}
