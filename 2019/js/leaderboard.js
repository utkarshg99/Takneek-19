let hx = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data() {
        return {
            search: '',
            headers: [],
            datax: []
        }
    },
    mounted(){
        axios.get("http://snt-code.herokuapp.com/getscores").then((datax) => {
            this.datax=datax.data.data
            this.headers=datax.data.headers
        })
    }
})