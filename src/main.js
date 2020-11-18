import Vue from 'vue'
import Top from './Top.vue'
import Bottom from './Bottom.vue'
import Notizie from './Notizie.vue'

Vue.config.productionTip = false

/* CREAZIONE HEADER */
new Vue({
  render: t => t(Top),
}).$mount('#top')

/* CREAZIONE MAIN */
new Vue({
  render: n => n(Notizie),
}).$mount('#main')

/* CREAZIONE FOOTER */
new Vue({
  render: b => b(Bottom),
}).$mount('#bottom')