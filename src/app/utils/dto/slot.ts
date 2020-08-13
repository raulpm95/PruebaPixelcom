export class Slot {
  startTime: string;
  endTime: string;
  usersAvaliable: number;
  selected: boolean;

  constructor(e?: any) {
    this.startTime = e ? e.startTime : '';
    this.endTime = e ? e.endTime : '';
    this.usersAvaliable = e ? e.usersAvaliable : 0;
    this.selected = false;
  }
}
