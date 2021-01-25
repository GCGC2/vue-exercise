// const vm = new Vue({
//   el: '#app',
//   data: {
//     counter: 0
//   },
//   // 在 methods 对象中定义方法
//   methods: {
//     addCounter: function (e) {
//       // this 在方法里指向当前 Vue 实例
//       this.counter += 1;
//       // e 是原生 DOM 事件
//       console.log(e.target);
//     }
//   }
// })

// new Vue({
//   el: '#app',
//   data: {
//     counter: 0
//   },
//   methods: {
//     addCounter: function (num, e) {
//       this.counter += 5;
//       console.log(e.target);
//     }
//   }
// })

const vm = new Vue({
  el: '#app',
  data: {
    event: 'click'
  },
  methods: {
    handleClick () {
      alert(1);
    }
  }
})