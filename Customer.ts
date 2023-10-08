export class Customer {
    private name: string;
    private id: number;
    private transactions: number[];
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
      this.transactions = [];
    }
  
    getName(): string {
      return this.name;
    }
  
    getId(): number {
      return this.id;
    }
  
    getTransactions(): number[] {
      return this.transactions;
    }
  
    getBalance(): number {
      const balance = this.transactions.reduce((acc, current) => acc + current, 0);
      return balance;
    }
  
    addTransaction(amount: number, number: number): void {
      this.transactions.push(amount * number);
    }
  }