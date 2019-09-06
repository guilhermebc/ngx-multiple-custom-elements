const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const bannerBundle = [
    './dist/ngx-banner/runtime.js',
    './dist/ngx-banner/es2015-polyfills.js',
    './dist/ngx-banner/polyfills.js',
    './dist/ngx-banner/main.js',
    './dist/ngx-banner/styles.js'
  ];

  const footerBundle = [
    './dist/ngx-footer/runtime.js',
    './dist/ngx-footer/es2015-polyfills.js',
    './dist/ngx-footer/polyfills.js',
    './dist/ngx-footer/main.js',
    './dist/ngx-banner/styles.js'
  ];

  // await fs.ensureDir('elements');

  await concat(bannerBundle, 'projects/app-sample/src/assets/ngx-banner-bundle.js');
  await concat(footerBundle, 'projects/app-sample/src/assets/ngx-footer-bundle.js');
})();
