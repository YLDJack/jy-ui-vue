<template>
  <div class="yinput"
    :class="[
      {
        'yinput-group--prepend': $slots.prepend || $slots.append || $slots.enterButton
      }
    ]"
  >
    <!-- 前置内容 -->
    <div class="yinput-group__prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <!-- 前置图标 -->
    <span class="yinput__prefix__icon" v-if="$slots.prefix || prefix">
      <slot name="prefix"></slot>
      <i class="icon"
          v-if="prefix"
          :class="`icon-${prefix}`">
      </i>
    </span>
    <input 
      v-bind="$attrs"
      :placeholder="placeholder" 
      :class="[
        `yinput-${size}`,
        {
          'yinput__normal': !$slots.prepend || !$slots.append,
          'yinput__prepend': $slots.prepend,
          'yinput__append': $slots.append,
          'yinput__prefix': $slots.prefix || prefix,
          'yinput__suffix': $slots.suffix || suffix,
        }
      ]" 
      :value="currentValue" 
      v-if="type === 'text'" 
      :disabled="disabled"
      ref="yinput"
      @input="handleInput($event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @change="$emit('change', $event.target.value)"
    >
    <!-- 后置内容 -->
    <div class="yinput-group__append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
    <!-- 后置图标 -->
    <span class="yinput__suffix__icon" v-if="$slots.suffix || suffix">
      <slot name="suffix"></slot>
      <i class="icon"
          v-if="suffix"
          :class="`icon-${suffix}`">
      </i>
    </span>
    <!-- 后置按钮 -->
    <div v-if="$slots.enterButton" class="yinput__enterButton" ref="enterButton">
      <slot name="enterButton"></slot>
    </div>
    <textarea 
      :placeholder="placeholder" 
      :value="value"
      v-if="type === 'textarea'" 
      oninput="this.style.height = this.scrollHeight + 4 + 'px'" 
      :disabled="disabled"
      @input="handleInput($event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
      @change="$emit('change', $event.target.value)"
    >
    </textarea>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class YInput extends Vue {
  @Prop({ default: '请输入内容' }) private placeholder !: string
  @Prop({
    default: 'large',
    validator(value) {
      return ['large', 'medium', 'small'].indexOf(value) >= 0
    },
  }) private size !: string
  @Prop([String, Number]) private value !: string | number
  @Prop({
    default: 'text',
    validator(value) {
      return ['text', 'textarea'].indexOf(value) >= 0
    },
  }) private type !: string
  @Prop({ default: false }) private disabled !: boolean
  @Prop(String) private prefix !: string
  @Prop(String) private suffix !: string
  // @Prop(Number) private rows !: number

  private currentValue: string | number = this.value === undefined || this.value === null 
  ? ''
  : this.value

  private mounted() {
    if (this.$slots.enterButton) {
      const enterButton = (this.$refs.enterButton as HTMLDivElement).querySelector('button')
      const input = this.$refs.yinput as HTMLInputElement
      if (enterButton) {
        input.style.borderRight = 'none'
        enterButton.style.margin = '0'
        enterButton.style.borderBottomLeftRadius = '0'
        enterButton.style.borderTopLeftRadius = '0'
        enterButton.style.cursor = 'pointer'
      }
    }
  }

  private setCurrentValue(value) {
    this.currentValue = value
  }

  private handleInput(event) {
    const value = event.target.value
    this.setCurrentValue(value)
    this.$emit('input', value)
  }

  @Watch('value')
  private changeValue(val, oldVal) {
    this.setCurrentValue(val)
  }

}
</script>
