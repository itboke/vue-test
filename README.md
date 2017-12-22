### 温馨提示
> 在vue的单元测试用例编码过程中，很多时候需要实现组件的传递props属性、自定义方法、第三方框架等
> 所以在这个测试用例方案的编码中引入Element的单元测试工具脚本Utils.js, 它封装了Vue单元测试中常用的方法
> 它可以帮助我们节约很多的成本


###### describe生命周期函数
为了能够在测试开始前先进行部分初始化，或者在测试结束后对一些内容进行销毁，主体还包括四个全局函数：
> beforeEach()：在describe函数中每个Spec执行之前执行
> afterEach()：在describe函数中每个Spec数执行之后执行
> beforeAll()：在describe函数中所有的Specs执行之前执行，但只执行一次，在Sepc之间并不会被执行
> afterAll()：在describe函数中所有的Specs执行之后执行，但只执行一次，在Sepc之间并不会被执行

###### 相关单元测试文章问题解答推荐
> https://www.zhihu.com/question/50566681?sort=created
> http://blog.csdn.net/violetjack0808/article/details/73740395
