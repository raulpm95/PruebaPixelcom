import { Component, Input, Output } from '@angular/core';
import { Slot } from '../../utils/dto/slot';

@Component({
  selector: 'app-slot',
  templateUrl: 'slot.component.html',
  styleUrls: ['slot.component.css']
})
export class SlotComponent {

  private _slot: Slot;
  get slot() {
    return this._slot;
  }
  @Input()  set slot(value: any) {
    this._slot = new Slot(value);
  }
  constructor() {
  }

  onSelectedChange(e: any) {
    this.slot.selected = e.checked;
    if (this.slot.usersAvailable !== 0) {
      this.slot.ocupaciones = this.slot.selected ? this.slot.ocupaciones + 1 : this.slot.ocupaciones - 1;
    }
  }
}
