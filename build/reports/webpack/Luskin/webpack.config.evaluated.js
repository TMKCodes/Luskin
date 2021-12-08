{
  mode: 'development',
  resolve: {
    modules: [
      'C:\\Users\\Tonto\\IdeaProjects\\Luskin\\build\\js\\packages\\Luskin\\kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\Tonto\\IdeaProjects\\Luskin\\build\\js\\packages\\Luskin\\kotlin-dce-dev\\Luskin.js'
    ]
  },
  output: {
    path: 'C:\\Users\\Tonto\\IdeaProjects\\Luskin\\build\\distributions',
    filename: [Function: filename],
    library: 'Luskin',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}