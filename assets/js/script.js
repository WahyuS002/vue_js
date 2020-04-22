var vo = new Vue({
    el: '#app',
    data: {
        url_google: "https://google.com",
        search: "searching..."
    },
    methods: {
        klik: function () {
            alert("hello")
        },
        input: function (params) {
            alert(params)
        }
    }
});