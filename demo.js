// const vm = new Vue({
//   el: '#app',
//   data: {
//     cFamily: ['阿蔡', '小蔡', '蔡娃'],
//     html:"<span>阿蔡和郭郭相亲相爱</span>"
//   }
// })


// v-html
const vm = new Vue({
  el: '#app',
  data: {
    msg: 'hello world'
  }
})

const oInput = document.getElementsByTagName('input')[0];
const oButton = document.getElementsByTagName('button')[0];
let msg = null;
oButton.onclick = function () {
  vm.msg = oInput.value; //使值变更为输入的值
}