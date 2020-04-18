<template>
  <div class="components">
    <h2>Input</h2>
    <div class="line"></div>
    <div class="item__content">
      <h3>基础输入框</h3>
      <div class="item">
        <y-input placeholder="请输入内容"></y-input>
      </div>
      <pre v-highlight>
        <code>
    &lt;y-input placeholder="请输入内容"&gt;&lt;/y-input&gt;
        </code>
      </pre>
      <h3>输入框尺寸</h3>
      <p>共有三种尺寸： 大（默认 36px）、中（32px）、小（24px）</p>
      <div class="item">
        <y-input placeholder="Large Size"></y-input>
        <div style="height: 20px;"></div>
        <y-input placeholder="Medium Size" size="medium"></y-input>
        <div style="height: 20px;"></div>
        <y-input placeholder="Small Size" size="small"></y-input>
      </div>
      <pre v-highlight>
        <code>
    &lt;y-input placeholder="Large Size"&gt;&lt;/y-input&gt;
    &lt;y-input placeholder="Medium Size" size="medium"&gt;&lt;/y-input&gt;
    &lt;y-input placeholder="Small Size" size="small"&gt;&lt;/y-input&gt;
        </code>
      </pre>
      <h3>复合型输入框</h3>
      <p>通过前置和后置实现复合型输入框</p>
      <div class="item">
        <y-input style="width: 400px;">
          <template slot="prepend">http://</template>
          <template slot="append">.com</template>
        </y-input>
        <div style="height: 20px;"></div>
        <y-input style="width: 400px;">
          <template slot="append">
            <i class="icon icon-setting"></i>
          </template>
        </y-input>
      </div>
      <pre v-highlight>
        <code>
    &lt;y-input style="width: 400px;"&gt;
      &lt;template slot="prepend"&gt;http://&lt;/template&gt;
      &lt;template slot="append"&gt;.com&lt;/template&gt;
    &lt;/y-input&gt;
    &lt;y-input style="width: 400px;"&gt;
      &lt;template slot="append"&gt;
        &lt;i class="icon icon-setting"&gt;&lt;/i&gt;
      &lt;/template&gt;
    &lt;/y-input&gt;
        </code>
      </pre>
      <h3>带 icon 的输入框</h3>
      <p>通过前置和后置添加自带或自定义icon</p>
      <div class="item">
        <span>属性方式：</span>
        <y-input placeholder="请输入搜索内容" prefix="search" style="width: 200px;"></y-input>
        <y-input suffix="calendar" style="width: 200px; margin-left: 20px;"></y-input>
        <div style="height: 20px;"></div>
        <span>slot 方式：</span>
        <y-input placeholder="请输入搜索内容" style="width: 200px;">
          <template slot="prefix">
            <i class="icon icon-search"></i>
          </template>
        </y-input>
        <y-input style="width: 200px; margin-left: 20px;">
          <template slot="suffix">
            <i class="icon icon-calendar"></i>
          </template>
        </y-input>
      </div>
      <pre v-highlight>
        <code>
    &lt;span&gt;属性方式：&lt;/span&gt;
    &lt;y-input placeholder="请输入搜索内容" prefix="search" style="width: 200px;"&gt;&lt;/y-input&gt;
    &lt;y-input suffix="calendar" style="width: 200px; margin-left: 20px;""&gt;&lt;/y-input&gt;

    &lt;span&gt;slot 方式：&lt;/span&gt;
    &lt;y-input placeholder="请输入搜索内容" style="width: 200px;"&gt;
      &lt;template slot="prefix"&gt;
        &lt;i class="icon icon-search"&gt;&lt;/i&gt;
      &lt;/template&gt;
    &lt;/y-input&gt;
    &lt;y-input style="width: 200px; margin-left: 20px;"&gt;
      &lt;template slot="suffix"&gt;
        &lt;i class="icon icon-calendar"&gt;&lt;/i&gt;
      &lt;/template&gt;
    &lt;/y-input&gt;
        </code>
      </pre>
      <h3>搜索输入框</h3>
      <p>带有搜索按钮的输入框</p>
      <div class="item">
        <y-input placeholder="请输入搜索内容" suffix="search" style="width: 400px;"></y-input>
        <div style="height: 20px;"></div>
        <y-input placeholder="请输入搜索内容" style="width: 400px;">
          <template slot="enterButton">
            <y-button type="primary" size="large" icon="search"></y-button>
          </template>
        </y-input>
        <div style="height: 20px;"></div>
        <y-input placeholder="请输入搜索内容" style="width: 400px;">
          <template slot="enterButton">
            <y-button type="primary" size="large">Search</y-button>
          </template>
        </y-input>
      </div>
      <pre v-highlight>
        <code>
    &lt;y-input placeholder="请输入搜索内容" suffix="search" style="width: 400px;"&gt;&lt;/y-input&gt;
    &lt;y-input placeholder="请输入搜索内容" style="width: 400px;"&gt;
      &lt;template slot="enterButton"&gt;
        &lt;y-button type="primary" size="large" icon="search"&gt;&lt;/y-button&gt;
      &lt;/template&gt;
    &lt;/y-input&gt;
    &lt;y-input placeholder="请输入搜索内容" style="width: 400px;"&gt;
      &lt;template slot="enterButton"&gt;
        &lt;y-button type="primary" size="large"&gt;Search&lt;/y-button&gt;
      &lt;/template&gt;
    &lt;/y-input&gt;
        </code>
      </pre>
      <h3>适应文本高度的文本域</h3>
      <p>文本域会自动适应高度变化</p>
      <div class="item">
        <y-input placeholder="请输入文本内容" type="textarea" style="width: 600px;"></y-input>
      </div>
      <pre v-highlight>
        <code>
      &lt;y-input placeholder="请输入文本内容" type="textarea" style="width: 600px;"&gt;&lt;/y-input&gt;
        </code>
      </pre>
      <h3>输入时格式化展示</h3>
      <p>结合组件，实现一个数值输入框，方便内容超长时的全量展现</p>
      <div class="item">
        <y-tooltip trigger="click" :content="value" position="topLeft">
          <y-input v-model="value" placeholder="请输入文本内容" style="width: 400px;"></y-input>
        </y-tooltip>
      </div>
      <pre v-highlight>
        <code>
      &lt;y-tooltip trigger="click" :content="value"&gt;
        &lt;y-input v-model="value" placeholder="请输入文本内容" style="width: 400px;"&gt;&lt;/y-input&gt;
      &lt;/y-tooltip&gt;
      &lt;script&gt;
        export default {
          return {
            data: {
              value: '123'
            }
          }
        }
      &lt;/script&gt;
        </code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Input extends Vue {
  private value: string = '123'
}
</script>
