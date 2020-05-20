var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // amount: number;
    // constructor(client: string, details: string, amount: number) {
    //   this.client = client;
    //   this.details = details;
    //   this.amount = amount;
    // }
    // short-hand method for defining properties of a class.  need to have access modifiers.
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
export { Invoice };
