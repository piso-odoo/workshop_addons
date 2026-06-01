import { Component, proxy, signal, computed, types as t } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { ExpenseItem } from "./expense_item/expense_item";

class ExpenseManager extends Component {
  static template = "owl_expense_manager.expense_manager";
  static components = {ExpenseItem}

  form = {
    title: signal(undefined, { type: t.string() }),
    amount: signal(undefined, { type: t.number() }),
    category: signal(undefined, { type: t.string() }),
  }

  setup() {
    this.state = proxy({
      expenses: [{
        id: window.crypto.randomUUID(),
        title: "Chips",
        amount: 123.34,
        category: "Food"
      }, {
        id: window.crypto.randomUUID(),
        title: "Keyboard",
        amount: 3456,
        category: "Shopping"
      }],
      form: this.form,
      filters: {
        query: "",
        category: "all",
      }
    });

  }

  filteredExpenses = computed(() => {
    const filters = this.state.filters;
    return this.state.expenses.filter((expense) => {
      return expense.title.toLowerCase().includes(filters.query.toLowerCase()) && (filters.category == "all" || expense.category == filters.category);
    });
  })

  get formValues() {
    return {
      title: this.state.form.title(),
      amount: this.state.form.amount(),
      category: this.state.form.category(),
    }
  }

  addExpense() {
    const { title, amount, category } = this.formValues;

    if (!title || !amount || !category) {
      return;
    }

    this.state.expenses.push({
      id: window.crypto.randomUUID(),
      title,
      amount,
      category,
    });
    this.resetForm();
  }

  deleteExpense(id) {
    const index = this.state.expenses.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.state.expenses.splice(index, 1);
    }
  }

  resetForm() {
    this.state.form.title.set("");
    this.state.form.amount.set("");
    this.state.form.category.set("");
  }
}

registry.category("actions").add("action_owl_expense_manager", ExpenseManager);