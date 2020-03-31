# React

1. 函数式组件调用子组件的方法（子组件函数式组件）

   ```jsx
   /* ---------- 父组件 ---------- */
   import React, { useRef } from 'react';
   const childrenRef = useRef(); // 生成ref
   <Children ref={childrenRef} />
   
   /* ---------- 子组件 ---------- */
   import React, { useImperativeHandle,forwardRef } from 'react';
   const Children =(props,ref)=>{
     // 向父组件暴露方法
   	useImperativeHandle(
       ref,
       () => ({
         getChildrenFun: childrenFun,
       }),
       [childrenFun]
     );
     const childrenFun=()=>{
       console.log('This is children function!')
     }
   }
   // 暴露方法的时候需要使用forwardRef包裹组件
   export default forwardRef(Children);
   
   /* ---------- 父组件调用子组件方法 ---------- */
   childrenRef.current.getChildrenFun(); 
   // console.log ---> 'This is children function!'
   ```

2. 函数式组件调用子组件的方法（子组件为class组件）

   ```jsx
   /* ---------- 父组件 ---------- */
   import React, { useState } from 'react';
   const [childrenRef, setChildrenRef] = useState({}); // 子组件ref
   <Children setRef={setChildrenRef} />
   
   /* ---------- 子组件 ---------- */
   export default class Children extends Component {
   	constructor(props){
       props.setRef(this); // 绑定this来模拟ref实现
     }
     childrenFun=()=>{
       console.log('This is children function!')
     }
   }
   /* ---------- 父组件调用子组件方法 ---------- */
   childrenRef.childrenFun();
   // console.log ---> 'This is children function!'
   ```

3. React中渲染HTML字符串

   ```jsx
   <div dangerouslySetInnerHTML={{ __html: "<h1>hello world!</h1>" }}></div>
   ```
   