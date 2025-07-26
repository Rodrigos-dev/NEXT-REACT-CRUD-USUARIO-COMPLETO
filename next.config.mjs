/** @type {import('next').NextConfig} */

const inGitHubPages = process.env && process.env.NODE_ENV === 'inGitHubPages';

const nextConfig = {
  output: inGitHubPages ? 'export' : '',  
  basePath: inGitHubPages ? '/NEXT-REACT-CRUD-USUARIO-COMPLETO': '',
  assetPrefix: inGitHubPages ? '/NEXT-REACT-CRUD-USUARIO-COMPLETO/' : '',
  images: {
      unoptimized: true,
    },
  reactStrictMode: true,
};

export default nextConfig;
