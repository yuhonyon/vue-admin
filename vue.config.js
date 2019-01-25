const fs = require('fs');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/styles/variables/default.scss', 'utf-8')
      }
    }
  }
};
