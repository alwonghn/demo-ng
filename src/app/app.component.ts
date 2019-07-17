import { Component } from '@angular/core';
import { DemowsclientService } from './demowsclient.service';
import {Ack} from './models/ack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'demo-ng';

  ackobj:Ack;

  constructor(private demowsclientervice:DemowsclientService){}

  ngOnInit(){
      this.demowsclientervice.getAck("").subscribe(
        (res:Ack)=>{
          this.ackobj = res.data;
          console.log('this.ackobj deno ='+this.ackobj.deno);
        }
      );
  }
}
