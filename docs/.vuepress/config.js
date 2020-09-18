const getConfig = require("vuepress-bar");
module.exports = {
    title: 'VerIT on Azure 2.0 Documentation',
    description: 'Documentation for VoA2.0',
    themeConfig: {
      ...getConfig(`${__dirname}/..`),
      logo: "/logo.png",
      nav: [
        { text: 'Home', link: '/' },
        { text: 'VoA2.0', link: '/01.VoA2.0/' },
        { text: 'VerIT Enterprise Infrastructure Technology Roadmap', link: 'https://dnvgltechroadmap-prod.azurewebsites.net/' }
      ]
            },
}