module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [".js", ".jdx", ".ts", ".tsx"],
                    alias: {
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@config": "./src/config",
                        "@hooks": "./src/hooks",
                        "@routes": "./src/routes",
                        "@screens": "./src/screens",
                        "@services": "./src/services",
                        "@styles": "./src/styles",
                        "@utils": "./src/utils",
                    },
                },
            ],
            [
                "module:react-native-dotenv",
                {
                    moduleName: "@env",
                    path: ".env",
                    blacklist: null,
                    whitelist: null,
                    safe: false,
                    allowUndefined: true,
                },
            ],
        ],
    };
};
