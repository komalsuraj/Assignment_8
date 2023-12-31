import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() public MyEvent = new EventEmitter();
 
  public SendEvent(title : any)
  {
    this.MyEvent.emit(title);
  }

}
