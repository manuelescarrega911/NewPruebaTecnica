export class AggTask {
  public DateNow : string
  public NameTask: string
  public TaskComplete : boolean
  constructor(NameTask: string, DateNow : string) {
    this.NameTask = NameTask;
    this.DateNow = DateNow;
  }
}