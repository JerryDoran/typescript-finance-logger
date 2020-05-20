export class Invoice {
  // readonly client: string;
  // private details: string;
  // amount: number;

  // constructor(client: string, details: string, amount: number) {
  //   this.client = client;
  //   this.details = details;
  //   this.amount = amount;
  // }

  // short-hand method for defining properties of a class.  need to have access modifiers.
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
