<template>
  <div>
    <P>1111111111</P>
    <slot name="top"></slot>
    <p>2222222222</p>
    <slot name="middle"></slot>
    <p>3333333333</p>
    <slot name="down"></slot>
    <p>4444444444</p>
    <slot :data="data"></slot>
    <p>5555555555</p>
    <!--  
        父元素内容    
      <Slot>
        <div slot="top">这是往子组件内塞的内容111</div>
        <div slot="middle">这是往子组件内塞的内容2222</div>
        <div slot="down">这是往子组件内塞的内容3333</div>
        <div slot-scope="item">{{item.data}}</div>
      </Slot> 
      -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        data:[111,222,333,444,555]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>