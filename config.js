module.exports = {
    "ui": {
        "port": 3011,
        "weinre": {
            "port": 8080
        }
    },
    "files": "docs",
    server: {
        baseDir: "docs",
    },
    "watchEvents": [
        "change"
    ],
    reloadOnRestart: true,
    "port": 3010
};