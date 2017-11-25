exports.config = {

    baseUrl: 'https://automizy.com',
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['e2e/features/**/*.feature'],

    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    serenity: {
        dialect: 'cucumber',
        requirementsDirectory: 'features'
    },

    cucumberOpts: {
        require: ['e2e/features/**/*.ts'], // loads step definitions
        format: 'pretty',               // enable console output
        compiler: 'ts:ts-node/register'   // interpret step definitions as TypeScript
    },

    allScriptsTimeout: 90000,

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
    }
};