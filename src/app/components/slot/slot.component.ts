import { Component, Input, Output } from '@angular/core';
import { Slot } from '../../utils/dto/slot';

@Component({
  selector: 'app-slot',
  templateUrl: 'slot.component.html',
  styleUrls: ['slot.component.css']
})
export class SlotComponent {

  @Input() slot: Slot = new Slot({
    startTime: '10:00',
    endTime: '10:30',
    usersAvaliable: 17
  });
  constructor() {
  }

  onSelectedChange(e: any) {
    this.slot.selected = e.checked;
  }
}
