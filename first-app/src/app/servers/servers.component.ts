import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus='No server was created!';
  serverName='TestServer';
  nomeutente='Pippo';
  serverCreated=false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },200);

  }

  ngOnInit() {

    };

  onCreateServer (){
    this.serverCreated=true;
    this.serverCreationStatus='Server was created!  Name is ' + this.serverName;
  };

  onUpdateServerName(event:Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  onResetNomeutente(){
    this.nomeutente='';
  }

}
