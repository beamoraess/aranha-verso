/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  output: "export", // Isso indica que o Next.js será exportado como estático
  basePath: "/aranhaversobea.github.io", // Substitua pelo nome do seu repositório GitHub
  trailingSlash: true, // O GitHub Pages requer "trailing slash"
};
