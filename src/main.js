import Vue from 'vue'
import App from './App.vue'
import VueHighcharts from 'vue-highcharts';

Vue.use(VueHighcharts);

new Vue({
  el: '#app',
  render: h => h(App)
})
