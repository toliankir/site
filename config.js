module.exports = {
    "ui": {
        "port": 3011,
        "weinre": {
            "port": 8080
        }
    },
    "files": "www",
    server: {
        baseDir: "www",
    },
    "watchEvents": [
        "change"
    ],
    reloadOnRestart: true,
    "port": 3010
};