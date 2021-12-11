module.exports = {
    test: /\.(js|jsx|ts|tsx)$/,
    include: paths.appSrc,
    loader: babel,
    query: {
      "plugins": [
        "babel-plugin-open-source",
        "editor:vscode",
      ],
  
      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory:true
    }
  }