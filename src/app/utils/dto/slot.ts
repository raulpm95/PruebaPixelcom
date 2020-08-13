export class Slot {
  startTime: string;
  endTime: string;
  usersAvailable: number;
  selected: boolean;

  constructor(e?: any) {
    this.startTime = e ? e.startTime : '';
    this.endTime = e ? e.endTime : '';
    this.usersAvailable = e ? e.usersAvailable : 0;
    this.selected = false;
  }
}
