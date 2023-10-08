export class Branch {
    private name: string;
    private customers: Customer[];
  
    constructor(name: string) {
      this.name = name;
      this.customers = [];
    }
  
    getName(): string {
      return this.name;
    }
  
    getCustomers(): Customer[] {
      return this.customers;
    }
  
    addCustomer(customer: Customer): void {
      this.customers.push(customer);
    }
  
    addCustomerTransaction(customerId: number, amount: number): void {
      const customer = this.customers.find((c) => c.getId() === customerId);
  
      if (customer) {
        customer.addTransaction(amount);
      }
    }
  }
  
  class Customer {
    private id: number;
    private transactions: number[];
  
    constructor(id: number) {
      this.id = id;
      this.transactions = [];
    }
  
    getId(): number {
      return this.id;
    }
  
    addTransaction(amount: number): void {
      this.transactions.push(amount);
    }
  }