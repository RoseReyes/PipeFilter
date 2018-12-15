import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  characters = [
    {name:'Finn the human', level:'1'},
    {name: 'Jake the dog', level:'1'},
    {name: 'Princess bubblegum', level:'3'},
    {name: 'Lumpy Space Princess', level:'3'},
    {name: 'Beemo1', level:'6'},
    {name: 'Beemo2', level:'7'}
  ]
}
