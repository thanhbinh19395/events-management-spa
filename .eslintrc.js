const paths = require('./config/paths');

module.exports = {
    // extends: [
    //     'wiremore',
    //     'wiremore/react',
    //     'plugin:security/recommended',
    // ],
    plugins: ['babel', 'import', 'security'],
    settings: {
        'import/resolver': {
            node: {
                paths: paths.resolveModules,
            },
        },
    },
    rules: {
        'import/named': 0,
        'import/no-unassigned-import': 0,
        'import/no-named-as-default-member': 0,
    },
};
