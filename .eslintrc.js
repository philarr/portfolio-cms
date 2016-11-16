module.exports = {
    "extends": "airbnb",
    "env": {
        "node": true,
        "browser": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "indent": [2, 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};