/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['kz', 'ru', 'en'],
    defaultLocale: 'ru',
  }
};

module.exports = nextConfig