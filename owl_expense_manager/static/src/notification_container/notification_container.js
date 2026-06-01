import { Component, plugin } from "@odoo/owl";
import { NotificationPlugin } from "../notification_plugin";

export class NotificationContainer extends Component {
    static template = "owl_expense_manager.notification_container"

    notification = plugin(NotificationPlugin)
}
