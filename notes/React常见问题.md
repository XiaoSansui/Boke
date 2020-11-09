# React常见问题

1. 在子组件外层包裹一层组件进行权限控制，如果这时候需要在父组件中操作props.children,给其增加props属性，可以使用React.cloneElement(children,{props});

