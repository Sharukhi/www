/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() { // Redirects
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
        destination: 'mailto:sharukhi@sharukhi.xyz',
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
    ]
  },
};

export default nextConfig;
