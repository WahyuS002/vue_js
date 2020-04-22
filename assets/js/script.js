var vo = new Vue({
    el: '#app',
    data: {

        // Objek biasa

        students: {
            nama: "Objek",
            umur: 001
        },

        // Array yang menampung objek
        members: [{
                nama: "Wahyu",
                umur: 19
            },
            {
                nama: "Antok",
                umur: 220
            },
            {
                nama: "Rey",
                umur: 123
            }
        ]

    }
});