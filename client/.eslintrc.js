module.exports = {
    "extends": "react",
    "plugins": [
        "import"
    ],
    "env": {
        "node": true,
        "es6" : true,
        "browser": true,
        "jest": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", 2],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "linebreak-style": "off",
        "import/newline-after-import": "off",
        "comma-dangle": "off",
        "no-tabs": "off",
        "no-underscore-dangle": 0,
        "consistent-return": "off",
        "max-len": 0,
        "no-param-reassing": 0,
        "no-nested-ternary": "off"
    }
};