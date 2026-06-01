import { Plugin, signal, types as t } from "@odoo/owl";

export class NotificationPlugin extends Plugin {
    notifications = signal.Array([], {
        type: t.object({
            id: t.string(),
            title: t.string(),
            description: t.string(),
            remove: t.function(),
        })
    })

    addNotification(title, description, options = {autoRemove: false, timeout: null}){
        const id = window.crypto.randomUUID();
        const notifications = this.notifications();

        const remove = () => {
            const index = notifications.findIndex((notification) => notification.id == id);
            if(index != -1){
                notifications.splice(index, 1);
            }
        }

        notifications.push({id, title, description, remove});

        if(options.autoRemove){
            setTimeout(() => {
                remove();
            }, options.timeout ?? 3000);
        }
    }
}
