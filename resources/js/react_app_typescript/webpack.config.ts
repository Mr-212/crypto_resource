const path = require('path')

module.exports = {
  // style: {
  //   postcss: {
  //     plugins: [
  //       require('tailwindcss'),
  //       require('autoprefixer'),
  //     ],
  //   },
  // },
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },



module: {
  rules: [
    {
      test: /\.(jsx|js)$/,
      include: path.resolve(__dirname, 'src'),
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
    // {
    //   test: /\.css$/i,
    //   include: path.resolve(__dirname, 'src'),
    //   exclude: /node_modules/,
    //   use: [
    //     {
    //       loader: MiniCssExtractPlugin.loader,
    //       options: {
    //         hmr: env.NODE_ENV === 'development',
    //       }
    //     },
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         importLoaders: 1 
    //       }
    //     },
    //     'postcss-loader'
    //   ]
    // }
  ]
},
resolve: {
    extensions: ['.ts', '.tsx','.js'],
  //   alias: {
  //     react: path.resolve('./node_modules/react')
  // },
},
}