/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() { 
      return [
        {
          source: '/links',
          destination: 'https://sharukhi.xyz',
          permanent: true,
        },
        {
          source: '/fb',
          destination: 'https://facebook.com/ataullah.sharukhi',
          permanent: true,
        },
        {
          source: '/ig',
          destination: 'https://www.instagram.com/ataullah_sharukhi',
          permanent: true,
        },
        {
          source: '/email',
          destination: 'mailto:hello@sharukhi.xyz',
          permanent: true,
        },
        {
          source: '/x',
          destination: 'https://x.com/sharukhi_',
          permanent: true,
        },
        {
          source: '/github',
          destination: 'https://github.com/sharukhi',
          permanent: true,
        },
        {
          source: '/login',
          destination: '/',
          permanent: true,
        },
        {
        source: '/wtr/:path*', 
        destination: 'https://wtr.sharukhu.xyz/:path*', 
        permanent: true, 
        },
        {
        source: '/wtr', 
        destination: 'https://wtr.sharukhu.xyz', 
        permanent: true, 
      },
      ]
    },
  };
  
  export default nextConfig;
