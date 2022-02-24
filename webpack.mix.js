const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');
const tailwindcss = require('tailwindcss');

// mix.sass('resources/sass/app.scss', 'public/css'
// ,[ 
//    require('postcss-import'),
//    require("tailwindcss"),
//   //  require("autoprefixer"),
// ]
// )
// .options({
//     processCssUrls: false,
//     postCss: [ tailwindcss('tailwind.config.js') ],
//   });

mix.ts('resources/js/react_app_typescript/src/index.tsx','public/js/react_app_typescript')
    .react()
    //  .sass('resources/sass/app.scss', 'public/css')
    .postCss('resources/css/app.css', 'public/css'
    // ,[ 
    //   require('postcss-import'),
    //   require("tailwindcss"),
    //   //  require("autoprefixer"),
    // ]
    )
    // .options({
    //   processCssUrls: false,
    //   postCss: [ tailwindcss('tailwind.config.js') ],
    // })
    .css('resources/js/react_app_typescript/src/index.css', 'public/css')
    .webpackConfig({
        module: {
            rules: [
              {
                test: /\.(jsx|js)$/,
                // include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', {
                        "targets": "defaults" 
                      }],
                      '@babel/preset-react'
                    ]
                  }
                }]
              }, 
            ]
          },
          resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
          }
    }); 
      