//import Vue from 'vue'; // 如果引入Utils.js工具库就不需要import vue
import { destroyVM, createTest, createVue } from '../utils';
import demo from '../../../src/components/demo';

describe('demo.vue', () => {

  let vm;

  // 结束执行，销毁
  afterEach(() => {
    destroyVM(vm)
  })

  it('测试获取Vue对象中数据', () => {
    vm = createTest(demo, { content: 'Hello World' }, true);
    expect(vm.name).toEqual('hello');
  })

  it('测试获取元素内容', () => {
    vm = createTest(demo, { content: 'Hello World' }, true);
    expect(vm.$el.querySelector('.name').textContent).toEqual('hello');
  })

  it('测试获取DOM中是否存在某个class', () => {
    vm = createTest(demo, { content: 'Hello World' }, true);
    expect(vm.$el.classList.contains('wrapper')).toBe(true);
  })

  it('测试按钮点击事件', () => {
    vm = createTest(demo, {}, true);
    let buttonElm = vm.$el.querySelector('button'); // 获取按钮元素
    buttonElm.click();
    expect(vm.clickNum).toEqual(1);
  })

  it('测试创建Vue对象', () => {
    vm = createVue({
      template: `
        <div @click="handleClick">button</div>
      `,
      data: {
        number: 0
      },
      methods: {
        handleClick () {
          this.number++;
        }
      }
    }, true);
    vm.$el.click()
    vm.$nextTick(() => {
      expect(vm.number).toEqual(1);
    })
  })

  /*
   * 在不使用 Utils.js的情况下
  */
  /* 检查mounted
  it('has a mounted hook', () => {
    expect(typeof demo.mounted).toEqual('function');
  })

  组件实例
  const Constructor = Vue.extend(demo);

  挂载组件
  const demoComponent = new Constructor().$mount();
  检查dom节点内容
  it('content should be a hello', () => {
    expect(demoComponent.$el.textContent).toEqual('hello');
  })
  */

})
