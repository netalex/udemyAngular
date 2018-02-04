import {
  Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element:{type:string, name:string, content:string};
  @Input() name:string;

  constructor() {
    console.log('app-server-element constructor called!')
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('app-server-element ngOnchanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('app-server-element ngOnInit called!')
  }

  ngDoCheck(){
    console.log('app-server-element ngDocheck called!')
  }

  ngAfterContentInit(){
    console.log('app-server-element ngAfterContentInit called!')
  }

  ngAfterContentChecked(){
    console.log('app-server-element ngAfterContentChecked called!')
  }

  ngAfterViewInit(){
    console.log('app-server-element ngAfterViewInit called!')
  }

  ngAfterViewChecked(){
    console.log('app-server-element ngAfterViewChecked called!')
  }
  ngOnDestroy(){
    console.log('app-server-element ngOnDestroy called!')
  }

}
