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
Vue.component(
    'async-example',
    () => import('./my-async-component')
)
Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
})

Vue.component('base-checkbox', {
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: Boolean
    },
    template: `
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
    `
})
Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
      inputListeners: function () {
        var vm = this
        // `Object.assign` 将所有的对象合并为一个新对象
        return Object.assign({},
          // 我们从父级添加所有的监听器
          this.$listeners,
          // 然后我们添加自定义监听器，
          // 或覆写一些监听器的行为
          {
            // 这里确保组件配合 `v-model` 的工作
            input: function (event) {
              vm.$emit('input', event.target.value)
            }
          }
        )
      }
    },
    template: `
      <label>
        {{ label }}
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on="inputListeners"
        >
      </label>
    `
})
var app = new Vue({
    el:'#app',
    data:{
        dataMax:'3434',
        searchText: '',
        lovingVue: false
    },
    methods:{
        onFocus: function (ev) {
           alert('11111')
        }
    }
})