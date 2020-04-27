function generateMarkdown(data) {
  return `
  # static-site [![NPM version](https://badge.fury.io/js/static-site.svg)](https://npmjs.org/package/static-site) [![Build Status](https://travis-ci.org/RumaRDas/static-site.svg?branch=master)](https://travis-ci.org/RumaRDas/static-site)
# ${data.title}

`;
}

module.exports = generateMarkdown;
