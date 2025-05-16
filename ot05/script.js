var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Aprendendo Vue JS',
        isRed: true,
        isGreen: false,
        fontSize: 16
    },
    methods: {
        toggleClass() {
            this.isRed = !this.isRed;
            this.isGreen = !this.isGreen;
        },
        increaseFontSize(){
            this.fontSize += 2;
        },
        decreaseFontSize(){
            this.fontSize -= 2;
        }
    }
})