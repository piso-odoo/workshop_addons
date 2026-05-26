{
    'name': "Expense Manager",
    'version': '1.0',
    'category': 'Productivity/OWL',
    'summary': "Internal knowledge sharing materials and OWL setup",
    'description': "Provides OWL workshop examples and setup to run OWL",
    'depends': ['web'],
    "data": [
        "views/owl_expense_manager_menu.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "owl_expense_manager/static/src/**/*",
        ],
    },
    'application': True,
    'installable': True,
    'author': 'Odoo S.A.',
    'license': 'OEEL-1',
}
