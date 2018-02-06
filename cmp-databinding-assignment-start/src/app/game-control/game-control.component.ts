import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  gameCounter:number=0;
  game;

  @Output() evenItem:EventEmitter<any>= new EventEmitter;
  @Output() oddItem:EventEmitter<any>= new EventEmitter;
  @Output() item:EventEmitter<number>= new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  isEven(numero) {
    if (isNaN(numero) == false)
    {
      return (numero %2 == 1 ?  true : false);
    }
    else
    {
      return null;
    }
  };


  onStartGame(){
    this.game=setInterval(
      ()=>{
        this.item.emit(this.gameCounter);
        this.gameCounter++
        console.log (this.game);
        console.log (this.gameCounter);
      }, 1000);
    console.log('exit onStartGame()')

  };

  onStopGame(){
    clearInterval(this.game);
    console.log(this.gameCounter+' last number, '+this.game+' last game value')
  }
}
