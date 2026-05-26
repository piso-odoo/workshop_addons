import { Component, xml } from "@odoo/owl";
import { registry } from "@web/core/registry";

class ExpenseManager extends Component {
    static template = xml`<h1>Hello World</h1>`;
}

registry.category("actions").add("action_owl_expense_manager", ExpenseManager);