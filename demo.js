// const vm = new Vue({
//     el:"#app",
//     data:{
//         persons:["阿蔡", "小蔡", "蔡梦"]
//     }
// })

// const vm = new Vue({
//     el: '#app',
//     data: {
//       persons: ['cai', 'meng', 'li', 'sha']
//     }
//   })


// const vm = new Vue({
//   el: '#app',
//   data: {
//     persons: ['cai', 'meng', 'li', 'sha']
//   },
//   methods: {
//     handleClick(index) {
//       const deleteItem = this.persons.splice(index, 1); //先删
//       this.persons.splice(index + 1, 0, ...deleteItem); //再增(splice删后得到的返回值,就是删除的值)
//                         //往index后一位插入,删除0位,将返回的数据插入(需要展开)
//     }
//   }
// })


// const vm = new Vue({
//   el: '#app',
//   data: {
//     show: true
//   }
// }) 

const vm = new Vue({
    el: '#app',
    data: {
      persons: [
        {name:'cai', isActive:true},
        {name:'meng', isActive:false},
        {name:'li', isActive:true},
        {name:'sha', isActive:false},
      ]
    }
  }) 

  this.persons.map(item => {
    if (item.isActive) {
      return item.name
    }
  })
