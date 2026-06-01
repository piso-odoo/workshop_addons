import { Component, props, types as t } from "@odoo/owl";

export class ExpenseItem extends Component {
    static template = "owl_expense_manager.expense_manager_item"

    props = props({
        expense: t.object({
            id: t.string(),
            title: t.string(),
            amount: t.number(),
            category: t.string(),
        }),
        onDelete: t.function(),
    })
}