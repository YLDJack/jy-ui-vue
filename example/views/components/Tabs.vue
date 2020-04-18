<template>
  <div class="components">
    <h2>Tabs</h2>
    <div class="line"></div>
    <div class="item__content">
      <h3>基本Tab切换</h3>
      <p>禁用一项，可加入图标</p>
      <y-tabs>
        <y-tab-pane label="Tab1" active>我是Tab1的内容</y-tab-pane>
        <y-tab-pane label="Tab2">我是Tab2的内容</y-tab-pane>
        <y-tab-pane label="Tab3" icon="search">我是Tab3的内容</y-tab-pane>
        <y-tab-pane label="Tab4" disabled>我是Tab4的内容</y-tab-pane>
      </y-tabs>
      <pre v-highlight>
        <code>
    &lt;y-tabs&gt;
      &lt;y-tab-panen label="Tab1" active&gt;我是Tab1的内容&lt;y-tab-panen&gt;
      &lt;y-tab-panen label="Tab2"&gt;我是Tab2的内容&lt;y-tab-panen&gt;
      &lt;y-tab-panen label="Tab3" icon="search"&gt;我是Tab3的内容&lt;y-tab-panen&gt;
      &lt;y-tab-panen label="Tab4" disabled&gt;我是Tab4的内容&lt;y-tab-panen&gt;
    &lt;/y-tabs&gt;
        </code>
      </pre>
    </div>
    <div class="item__content">
      <h3>四种方向</h3>
      <select value="top" v-model="position">
        <option value="top">top</option>
        <option value="bottom">bottom</option>
        <option value="left">left</option>
        <option value="right">right</option>
      </select>
      <y-tabs :position="position">
        <y-tab-pane label="Tab1" active>我是Tab1的内容</y-tab-pane>
        <y-tab-pane label="Tab2">我是Tab2的内容</y-tab-pane>
        <y-tab-pane label="Tab3">我是Tab3的内容</y-tab-pane>
      </y-tabs>
      <pre v-highlight>
        <code>
    &lt;select value="top" v-model="position"&gt;
      &lt;option value="top"&gt;Top&lt;option&gt;
      &lt;option value="bottom"&gt;Bottom&lt;option&gt;
      &lt;option value="left"&gt;Left&lt;option&gt;
      &lt;option value="right"&gt;Right&lt;option&gt;
    &lt;/select&gt;      
    
    &lt;y-tabs :position="position"&gt;
      &lt;y-tab-panen label="Tab1" active&gt;我是Tab1的内容&lt;y-tab-panen&gt;
      &lt;y-tab-panen label="Tab2"&gt;我是Tab2的内容&lt;y-tab-panen&gt;
      &lt;y-tab-panen label="Tab3"&gt;我是Tab3的内容&lt;y-tab-panen&gt;
    &lt;/y-tabs&gt;

    export default {
      data: {
        return {
          position: 'top'
        }
      }
    }
        </code>
      </pre>
    </div>
    <div class="item__content">
      <h3>卡片式切换</h3>
      <y-tabs type="card">
        <y-tab-pane label="Tab1">我是Tab1的内容</y-tab-pane>
        <y-tab-pane label="Tab2" active>我是Tab2的内容</y-tab-pane>
        <y-tab-pane label="Tab3">我是Tab3的内容</y-tab-pane>
      </y-tabs>
      <pre v-highlight>
        <code>
    &lt;y-tabs type="card"&gt;
      &lt;y-tab-panen label="Tab1"&gt;我是Tab1的内容&lt;/y-tab-panen&gt;
      &lt;y-tab-panen label="Tab2" active&gt;我是Tab2的内容&lt;/y-tab-panen&gt;
      &lt;y-tab-panen label="Tab3"&gt;我是Tab3的内容&lt;/y-tab-panen&gt;
    &lt;/y-tabs&gt;
        </code>
      </pre>
    </div>
    <div class="item__content">
      <h3>可编辑状态</h3>
      <y-tabs editable @tab-add="add">
        <y-tab-pane :label="item.label" v-for="(item, index, key) in panes" :key="key">
          {{item.content}}
        </y-tab-pane>
      </y-tabs>
      <pre v-highlight>
        <code>    
    &lt;y-tabs editable @tab-add="add"&gt;
      &lt;y-tab-panen :label="item.label" v-for="(item, index, key) in panes" :key="key"&gt;
         &#123; &#123;item.content&#125; &#125;
      &lt;/y-tab-panen&gt;
    &lt;/y-tabs&gt;

  &lt;script&gt;
    export default {
      data: {
        return {
          position: [{
            label: 'Tab 1',
            content: 'I am one'
          },{
            label: 'Tab 2',
            content: 'I am two'
          }]
        }
      }

      methods: {
        add() {
          this.panes.push({
            label: 'New Tab',
            content: 'new content'
          })
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
export default class Tabs extends Vue {
  private position: string = 'top'
  private panes: object[] = [{
    label: 'Tab 1',
    content: 'I am one',
  },{
    label: 'Tab 2',
    content: 'I am two',
  }]

  private add() {
    this.panes.push({
      label: 'New Tab',
      content: 'new content',
    })
  }
}
</script>
