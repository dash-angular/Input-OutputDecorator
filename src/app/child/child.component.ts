import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // inputs:['Pdata']
  outputs:['childevent']
})
export class ChildComponent {
// Pdata:any;
childevent= new EventEmitter;

onChange(val:any){
console.log(val);
this.childevent.emit(val);
}

}
