const vm = new Vue({
  el: '#app',
  data: {
    cFamily: ['阿蔡', '小蔡', '蔡娃']
  }
})
// vm.cFamily[3] = '郭妹儿';

// vm.cFamily.push("郭妹儿")

vm.$set(vm.cFamily, 3, "小郭妹儿")

