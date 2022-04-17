var Encore = require('@symfony/webpack-encore');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('static/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('app', './assets/js/app.js')
    .addEntry('search', './assets/js/search.js')

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    .disableSingleRuntimeChunk()

    .addPlugin(
        new GoogleFontsPlugin({
            fonts: [
                { family: "Lato", variants: ["300", "400", "400italic", "600", "700", "700italic", "800"] }
            ],
            local: true,
            path: "fonts/"
        })
    )

    .addPlugin(
        new WebpackManifestPlugin({
            fileName: '../../data/manifest.json'
        })
    )

    .addLoader(
        {
            test: /bootstrap\.native/,
            use: {
                loader: 'bootstrap.native-loader'
            }
        }
    )
;

module.exports = Encore.getWebpackConfig();