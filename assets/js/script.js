Vue.component('template-baru', {
    template: "#newTemplate",
    props: ['nama', 'umur']
})

var vo = new Vue({
    el: '#app',
    data: {
        nama: "Wahyu",
        umur: 19
    }
});