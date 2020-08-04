# dva

在umi中使用dva

1. 需要模板的话可以先使用umi ui创建umi2的脚手架，然后手动升级到umi3

2. `namespace` 表示在全局 state 上的 key，如果不填写，会默认使用文件名作为`namespace`

3. `state` 是初始值，可以是任意JavaScript数值类型

4. `reducers` 等同于 redux 里的 reducer，接收 action，同步更新 state，是dva中唯一可以直接修改`state`的地方

5. `effect`被称为副作用，在我们的应用中，最常见的就是异步操作。它来自于函数编程的概念，之所以叫副作用是因为它使得我们的函数变得不纯，同样的输入不一定获得同样的输出。

6. `Subscription` 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。

7.  `Action `是用来描述 UI 层事件的一个对象。

8. `connect` 是一个函数，绑定 `State` 到 `View`。

   1. ```js
      import { connect } from 'dva';
      
      function mapStateToProps(state) {
        return { todos: state.todos };
      }
      connect(mapStateToProps)(App);
      ```

      connect 方法返回的也是一个 React 组件，通常称为容器组件。因为它是原始 UI 组件的容器，即在外面包了一层 State。

      connect 方法传入的第一个参数是 mapStateToProps 函数，mapStateToProps 函数会返回一个对象，用于建立 State 到 Props 的映射关系。

9. `dispatch` 是一个函数方法，用来将 Action 发送给 State。

   1. ```js
      dispatch({
        type: 'click-submit-button',
        payload: this.form.data
      })
      ```

10. 任务并行执行

    1. ```js
       const [result1, result2]  = yield all([
         call(service1, param1),
         call(service2, param2)
       ])
       ```

11. 任务的竞争

    1. ```js
       const { data, timeout } = yield race({
         data: call(service, 'some data'),
         timeout: call(delay, 1000)
       });
       
       if (data)
         put({type: 'DATA_RECEIVED', data});
       else
         put({type: 'TIMEOUT_ERROR'});
       /*
       这个例子比较巧妙地用一个延时一秒的空操作来跟一个网络请求竞争，如果到了一秒，请求还没结束，就让它超时。
       这个类似于Promise.race的作用。
       */
       ```

12. 

13. 

    

    

    

    



