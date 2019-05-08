Vue.component('product-a', {
    props:{
        msg:{
            type:Number,
            required:true,
        },
    },
    name:'Product',
    template:`
        <div>
            <h1>{{msg}}</h1>
        </div>
    `,
    data(){
        return {
            msg1:"898"
        }
    },

})
var app = new Vue({
    el:'#app',
    data:{
        dataMax:'3434'
    },
})