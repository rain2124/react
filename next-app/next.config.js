/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOption: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig
