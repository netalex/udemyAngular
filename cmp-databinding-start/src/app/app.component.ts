import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'testServer', content:'Just a test!'}];
  /*newServerName = '';
  newServerContent = '';*/

  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(blueprintData:{serverName:string,serverContent:string}) {
        this.serverElements.push({
          type: 'blueprint',
          name: blueprintData.serverName,
          content: blueprintData.serverContent
        });
  }

  onChangeFirst(){
    console.log(this.serverElements);
    this.serverElements[0].name='changed!!';
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
}
