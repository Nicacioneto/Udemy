import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  luke = {name:'Luke', isJedi:true, temple: 'Coruscant'}
  lea = {name:'Lea', isJedi:false}
  han = {name:'Han Solo', isJedi:false}

}
