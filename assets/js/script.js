var vo = new Vue({
    el: '#app',
    data: {
        nama: "wahyu",
        umur: 19
    },
    // Computed basic
    // computed: {
    //     biodata: function () {
    //         return this.nama + " umurnya " + this.umur
    //     }
    // }

    // Computed advanced (get, post)
    computed: {
        biodata: {
            get: function () {
                return this.nama + " umurnya " + this.umur
            },
            set: function (parameter) {
                var ubah = parameter.split(' ');
                this.nama = ubah[0]
                this.umur = ubah[1]
            }
        }
    }
});