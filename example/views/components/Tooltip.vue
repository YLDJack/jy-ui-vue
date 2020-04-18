<template>
  <div class="components">
    <h2>Tooltip</h2>
    <div class="line"></div>
    <div class="item__content">
      <h3>四种位置</h3>
      <div class="item">
        <y-tooltip content="上方文字提示" position="top">
          <button>上面</button>
        </y-tooltip>
      </div>
      <div class="item">
        <y-tooltip content="下方文字提示" position="bottom">
          <button>下面</button>
        </y-tooltip>
      </div>
      <div class="item">
        <y-tooltip content="左边文字提示" position="left">
          <button>左边</button>
        </y-tooltip>
      </div>
      <div class="item">
        <y-tooltip content="右边文字提示" position="right">
          <button>右边</button>
        </y-tooltip>
      </div>
      <br>
      <div class="item">
        <y-tooltip content="上左文字提示" position="topLeft">
          <button>上左</button>
        </y-tooltip>
      </div>
      <div class="item">
        <y-tooltip content="上右文字提示" position="topRight">
          <button>上右</button>
        </y-tooltip>
      </div>
      <div class="item">
        <y-tooltip content="下左文字提示" position="bottomLeft">
          <button>下左</button>
        </y-tooltip>
      </div>
      <div class="item">
        <y-tooltip content="下右文字提示" position="bottomRight">
          <button>下右</button>
        </y-tooltip>
      </div>
      <pre v-highlight>
        <code>
    &lt;y-tooltip content="上方文字提示" position="top"&gt;
      &lt;button&gt;上面&lt;/button&gt;
    &lt;/y-tooltip&gt;
        </code>
      </pre>
      <h3>两种主题</h3>
      <div class="item">
        <y-tooltip content="黑色主题">
          <button>黑色</button>
        </y-tooltip>
      </div>
      <div class="item">
        <y-tooltip content="白色主题" theme="Light" position="bottom">
          <button>白色</button>
        </y-tooltip>
      </div>
      <pre v-highlight>
        <code>
    &lt;y-tooltip content="白色主题" theme="Light" position="bottom"&gt;
      &lt;button&gt;白色&lt;/button&gt;
    &lt;/y-tooltip&gt;
        </code>
      </pre>
      <h3>支持HTML代码段</h3>
      <div class="item">
        <y-tooltip>
          <button>支持HTML</button>
          <template slot="content">
            <span>支持多行信息</span><br>
            <span>123</span>
          </template>
        </y-tooltip>
      </div>
      <pre v-highlight>
        <code>
    &lt;y-tooltip&gt;
      &lt;button&gt;支持HTML&lt;/button&gt;
      &lt;template slot="content"&gt;
        &lt;span&gt;支持多行信息&lt;/span&gt;&lt;/br&gt;
        &lt;span&gt;123&lt;/span&gt;
      &lt;/template&gt;
    &lt;/y-tooltip&gt;
        </code>
      </pre>
      <h3>点击触发</h3>
      <y-tooltip trigger="click" content="点击弹出内容">
        <button>点击</button>
      </y-tooltip>
      <pre v-highlight>
        <code>
    &lt;y-tooltip trigger="click" content="点击弹出内容"&gt;
      &lt;button&gt;点击&lt;/button&gt;
    &lt;/y-tooltip&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Tooltip extends Vue {}
</script>

<style scoped>
  div[class="item"] {
    display: inline-block;
    margin: 10px 5px;
  }
</style>

