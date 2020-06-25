import Transaction from '../models/Transaction';

class Balance{
    income: number;

    outcome: number;

    total: number;

    constructor(transactions: Transaction[]) {
        this.income = transactions.filter(t => t.type === 'income').reduce(function (accumulator: number, obj: Transaction): number {
            return accumulator + obj.value;
        }, 0);

        this.outcome = transactions.filter(t => t.type === 'outcome').reduce(function (accumulator: number, obj: Transaction): number {
            return accumulator + obj.value;
        }, 0);

        this.total = this.income - this.outcome;
    }
}

export default Balance;