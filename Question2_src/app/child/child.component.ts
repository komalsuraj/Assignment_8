import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() public parentData : any;

  @Output() public MyEvent = new EventEmitter();

  public SendEvent()
  {
    this.MyEvent.emit('Hello from child');
  }
}
