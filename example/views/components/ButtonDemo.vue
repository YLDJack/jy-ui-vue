<template>
  <div class="components">
    <h2>Button</h2>
    <div class="line"></div>
    <div class="item__content">
      <h3>按钮类型</h3>
      <div class="button__group">
        <y-button>默认</y-button>
        <y-button type="primary">主要</y-button>
        <y-button type="dashed">虚线</y-button>
        <y-button type="text">文字按钮</y-button>
        <br><br>
        <y-button type="success">成功</y-button>
        <y-button type="warning">警告</y-button>
        <y-button type="danger">危险</y-button>
      </div>
      <pre v-highlight>
        <code>
    &lt;y-button&gt;默认&lt;/y-button&gt;
    &lt;y-button type="primary"&gt;主要&lt;/y-button&gt;
    &lt;y-button type="dashed"&gt;虚线&lt;/y-button&gt;
    &lt;y-button type="text"&gt;文字&lt;/y-button&gt;
    &lt;y-button type="success"&gt;成功&lt;/y-button&gt;
    &lt;y-button type="warning"&gt;警告&lt;/y-button&gt;
    &lt;y-button type="danger"&gt;危险&lt;/y-button&gt;
        </code>
      </pre>
    </div>
    <div class="item__content">
      <h3>图标按钮</h3>
      <y-button icon="search"></y-button>
      <y-button icon="search">搜索</y-button>
      <y-button icon="search" type="primary"></y-button>
      <y-button icon="search" type="primary">搜索</y-button>
      <pre v-highlight>
        <code>
    &lt;y-button icon="search"&gt;&lt;/y-button&gt;
    &lt;y-button icon="search"&gt;搜索&lt;/y-button&gt;
    &lt;y-button icon="search" type="primary"&gt;&lt;/y-button&gt;
    &lt;y-button icon="search" type="primary"&gt;搜索&lt;/y-button&gt;
        </code>
      </pre>
    </div>
    <div class="item__content">
      <h3>按钮尺寸</h3>
      <y-button size="large">大号</y-button>
      <y-button>默认</y-button>
      <y-button size="small">小号</y-button>
      <y-button size="mini">超小</y-button>
      <pre v-highlight>
        <code>
    &lt;y-button size="large"&gt;大号&lt;/y-button&gt;
    &lt;y-button&gt;默认&lt;/y-button&gt;
    &lt;y-button size="small"&gt;小号&lt;/y-button&gt;
    &lt;y-button size="mini"&gt;超小&lt;/y-button&gt;
        </code>
      </pre>
    </div>
    <div class="item__content">
      <h3>禁用状态</h3>
      <y-button disabled>默认</y-button>
      <y-button type="primary" disabled>主要</y-button>
      <y-button type="dashed" disabled>虚线</y-button>
      <y-button type="text" disabled>文字按钮</y-button>
      <pre v-highlight>
        <code>
    &lt;y-button disabled&gt;默认&lt;/y-button&gt;
    &lt;y-button type="primary" disabled&gt;主要&lt;/y-button&gt;
    &lt;y-button type="dashed" disabled&gt;虚线&lt;/y-button&gt;
    &lt;y-button type="text" disabled&gt;文字按钮&lt;/y-button&gt;
        </code>
      </pre>
    </div>
    <div class="item__content">
      <h3>加载状态</h3>
      <y-button :loading="isLoading" type="primary" @click="click">点击</y-button>
      <y-button :loading="true" type="primary">点击</y-button>
      <y-button :loading="isLoading1" type="primary" icon="search" @click="click1"></y-button>
      <!-- <y-button :loading="true" type="primary" icon="search"></y-button> -->
      <pre v-highlight>
        <code>
    &lt;y-button :loading="isLoading" type="primary" @click="click"&gt;点击&lt;/y-button&gt;
    &lt;y-button :loading="true" type="primary"&gt;点击&lt;/y-button&gt;
    &lt;y-button :loading="isLoading1" type="primary" icon="search" @click="click1"&gt;&lt;/y-button&gt;
        </code>
      </pre>
    </div>
    <div class="item__content">
      <h3>按钮组</h3>
      <y-button-group>
        <y-button type="primary"><i class="icon icon-left" style="margin-left: -5px"></i>上一页</y-button>
        <y-button type="primary">下一页<i class="icon icon-right" style="margin-right: -5px"></i></y-button>
      </y-button-group>
      <pre v-highlight>
        <code>
    &lt;y-button-group&gt;
      &lt;y-button type="primary"&gt;&lt;i class="icon icon-angle-left" style="margin-left: 0"&gt;&lt;/i&gt;上一页&lt;/y-button&gt;
      &lt;y-button type="primary"&gt;下一页&lt;i class="icon icon-angle-right" style="margin-right: 0"&gt;&lt;/i&gt;&lt;/y-button&gt;
    &lt;/y-button-group&gt;
        </code>
      </pre>
      <y-button-group>
        <y-button icon="search" type="primary"></y-button>
        <y-button icon="search" type="primary"></y-button>
        <y-button icon="search" type="primary"></y-button>
      </y-button-group>
      <pre v-highlight>
        <code>
    &lt;y-button-group&gt;
      &lt;y-button icon="search" type="primary"&gt;&lt;/y-button&gt;
      &lt;y-button icon="search" type="primary"&gt;&lt;/y-button&gt;
      &lt;y-button icon="search" type="primary"&gt;&lt;/y-button&gt;
    &lt;/y-button-group&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ButtonDemo extends Vue {
  private isLoading: boolean = false
  private isLoading1: boolean = false

  private click() {
    this.isLoading = true
    // const that = this
    // setTimeout(function(){
    //   that.isLoading = false
    // },2000)
  }
  private click1() {
    this.isLoading1 = true
  }
}
</script>

<style>
  .button__group {
    width: 400px;
    margin: 10px auto;
    text-align: left;
  }
</style>
