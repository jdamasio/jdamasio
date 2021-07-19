import Vue from 'vue'

Vue.filter('formatBreakLine', (item) => {
  return item.replace(/\\n/g, '<br />')
})

Vue.filter('removeQuotes', (item) => {
  return item.replace("'", '')
})
