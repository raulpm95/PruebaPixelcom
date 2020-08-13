export class Slot {
  startTime: string;
  endTime: string;
  usersAvailable: number;
  ocupaciones: number = 0;
  selected: boolean;

  constructor(e?: any) {
    this.startTime = e ? e.startTime.substring(0,5) : '';
    this.endTime = e ? e.endTime.substring(0,5) : '';
    this.usersAvailable = e ? e.usersAvailable : 0;
    this.ocupaciones = 0;
    this.selected = false;
  }
}
