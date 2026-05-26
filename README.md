# OWL Workshop – Expense Manager

A hands-on workshop to learn OWL by building a simple Expense Manager application.

## Resources

* [Google Slides](https://docs.google.com/presentation/d/15VQtS-ewPk1eZ6Z17ZtZcoMEBVio4vPZYT92XATPgbw/edit?usp=sharing)
* [Stylesheet (Gist)](https://gist.github.com/piso-odoo/760e1ab34024e780f02984cfb13ce131#file-style-css)

## Addon Structure

```text
workshop_addons/
└── owl_expense_manager/
    ├── __manifest__.py
    ├── static/
    │   └── src/
    │       └── expense_manager.js
    └── views/
        └── owl_expense_manager_menu.xml
```

## Setup

Start Odoo with the workshop addons path:

```bash
./odoo-bin \
  -d owl_workshop \
  --addons-path=addons,../enterprise,../workshop_addons \
  --dev=all
```

Update the Apps list and install **OWL Expense Manager**.

## What We'll Build

* OWL components
* Reactive state
* Event handling
* Expense list
* Create/Delete expenses
* OWL Plugins
* Basic styling

Happy coding 🚀
