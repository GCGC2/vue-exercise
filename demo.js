const vm = new Vue({
  el: "#app",
  data: {
    goodsList: [
      {
        title: '上装',
        typeList: ['全部', '针织衫', '毛呢外套', 'T恤', '羽绒服', '棉衣', '卫衣', '风衣'],
        id: 1,
      },
      {
        title: '裤装',
        typeList: ['全部', '牛仔裤', '小脚/铅笔裤', '休闲裤', '打底裤', '哈伦裤'],
        id: 2,
      },
      {
        title: '裙装',
        typeList: ['全部', '连衣裙', '半身裙', '长袖连衣裙', '中长款连衣裙'],
        id: 3,
      }
    ],
    filterObj: {},
    showFilterGoods: false
  },
  methods: {
    addFilterHandle(typeIndex, goods, type, goodsIndex) { //点击哪一个种类,就得到种类对应的整个类别对象
      if (type === "全部") {
        return; //若点击的是"全部",则不执行下面的操作
      }
      this.showFilterGoods = true; //当点击一个种类后,状态显示变为true
      goods.index = typeIndex; //更改已存在的属性,就会重新渲染,所以不需要用$set
      // this.filterObj.splice(goodsIndex, 1, type); //每行只添加一个位置的数据,实现一个类别只能选择一个种类
      vm.$set(this.filterObj, goodsIndex, type);
      console.log(this.filterObj);
    },
    //删除所选种类
    deleteFilterGoods(goodsFilterKey) {
      this.$delete(this.filterObj, goodsFilterKey);
      // 将删除项对应的对象index也重置为0
      this.goodsList[goodsFilterKey].index = 0;
    },
    //初始文字的显示与否
    changeShowFilter(){
      const filterObjStr = JSON.stringify(this.filterObj);
      this.showFilterGoods = filterObjStr !== "{}"; //filterStr不等于{}的时候为true,不显示初始文字
    }
  }
})

vm.goodsList.forEach(item => vm.$set(item, "index", 0));
