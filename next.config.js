/* PurgeCSS see postcss.config.js
https://purgecss.com/guides/next.html#customize-postcss-configuration-next-js-9-3
*/

const path = require('path');



 const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about/bjornbrynjar/',
        permanent: true,
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true, //https://nextjs.org/docs/api-reference/next.config.js/trailing-slash
  compress: true,
  swcMinify: true,
  /*From here: https://spacejelly.dev/posts/how-to-use-cloudinary-images-in-next-js-with-blurred-placeholders/
  Todo Introduce next/image - library
  /*images: {
    domains: [
      'res.cloudinary.com'
    ],
    
    },*/

    
  }

  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })

  module.exports = withBundleAnalyzer(nextConfig)