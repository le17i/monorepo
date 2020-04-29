module.exports = {
  chainWebpack: config => config.externals({
    ...config.get('externals'),
    'vuetify': 'vuetify'
  }),
  "transpileDependencies": [
    "vuetify"
  ]
}