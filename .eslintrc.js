module.exports = {
    'env': {
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parser': 'typescript-eslint-parser',
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module'
    },
    'plugins': [
        'unicorn',
        'typescript',
    ],
    'rules': {
        'no-undef': 0,
        'no-unused-vars': 0,
        'no-console': 0,
        'indent': ['warn', 4],
        "quotes": [1, "single", { "allowTemplateLiterals": true }],
        'semi': ['warn', 'always']
    }
};
