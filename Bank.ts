import { Transaction } from "./transactions";


class Bank {
  private name: string;
  private branches: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch: Branch): void {
    this.branches.push(branch);
  }

  addCustomer(branch: Branch, customer: Customer): void {
    const targetBranch = this.findBranchByName(branch.getName());

    if (targetBranch) {
      targetBranch.addCustomer(customer);
    }
  }

  addCustomerTransaction(
    branch: Branch,
    customerId: number,
    amount: number
  ): void {
    const targetBranch = this.findBranchByName(branch.getName());

    if (targetBranch) {
      targetBranch.addCustomerTransaction(customerId, amount);
    }
  }

  findBranchByName(branchName: string): Branch | undefined {
    return this.branches.find((branch) => branch.getName() === branchName);
  }

  checkBranch(branch: Branch): boolean {
    return this.branches.includes(branch);
  }

  listCustomers(branch: Branch, includeTransactions: boolean): void {
    const targetBranch = this.findBranchByName(branch.getName());

    if (targetBranch) {
      targetBranch.listCustomers(includeTransactions);
    }
  }
}

class Branch {
  private name: string;
  private customers: Customer[];

  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }

  getName(): string {
    return this.name;
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

  listCustomers(includeTransactions: boolean): void {
    if (includeTransactions) {
      this.customers.forEach((customer) => {
        console.log(`Customer ID: ${customer.getId()}`);
        console.log(`Transactions: ${customer.getTransactions()}`);
      });
    } else {
      this.customers.forEach((customer) => {
        console.log(`Customer ID: ${customer.getId()}`);
      });
    }
  }
}

class Customer {
  private id: number;
  private transactions: Transaction[];

  constructor(id: number) {
    this.id = id;
    this.transactions = [];
  }

  getId(): number {
    return this.id;
  }

  addTransaction(amount: number): void {
    const transaction = new Transaction(this.getId(), amount);
    this.transactions.push(transaction);
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }
}

const t1 = new Transaction(1, 2);
console.log(t1);

const myBank = new Bank("My Bank");

const branch1 = new Branch("Branch 1");
const branch2 = new Branch("Branch 2");

myBank.addBranch(branch1);
myBank.addBranch(branch2);

const customer1 = new Customer(1);
const customer2 = new Customer(2);

myBank.addCustomer(branch1, customer1);
myBank.addCustomer(branch2, customer2);

myBank.addCustomerTransaction(branch1, 1, 100);
myBank.addCustomerTransaction(branch2, 2, 200);

myBank.listCustomers(branch1, true);
myBank.listCustomers(branch2, true);