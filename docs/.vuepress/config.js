const getConfig = require("vuepress-bar");
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
      ...getConfig(`${__dirname}/..`)
            },
}