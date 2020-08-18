<template>
  <view class="wrap wrap-class">
    <view 
      v-if="!showTextArea && !value"
      class="placeholder" 
      :class="placeholderClass"
      :style="placeholderStyle"
    >{{placeholder}}</view>
    <textarea 
      v-if="!disabled && showTextArea"
      class="textarea"
      :class="textareaClass"
      :value="value"
      :disabled="disabled"
      :maxlength="maxlength" 
      :auto-focus="autoFocus" 
      :disable-default-padding="disableDefaultPadding"
      :focus="focus"
      :fixed="fixed"
      :adjust-position="adjustPosition"
      :placeholder="placeholder"
      :placeholder-class="`placeholder ${placeholderClass}`"
      :placeholder-style="placeholderStyle"
      @focus="handleFocus"
      @blur="handleBlur"
      @linechange="handleLineChange"
      @input="handleInput" 
      @confirm="handleConfirm"
      @keyboardheightchange="handleKeyboardHeightChange"
      :style="textareaStyle"
    /> 
    <view v-else 
          class="textarea" 
          :class="textareaClass"
          @tap="handleTap"
          :style="virtualTextareaStyle">
      {{value}}
    </view>
  </view>
</template>

<script>
  export default {
    name: 'multiline',
    props: {
      'value': {
        type: String,
        default: ''
      },
      'placeholder': {
        type: String,
        default: ''
      },
      'placeholderClass': {
        type: String, 
        default: ''
      },
      'placeholderStyle': {
        type: String,
        default: ''
      },
      'disabled': {
        type: Boolean,
        default: false
      },
      'maxlength': {
        type: Number,
        value: -1
      },
      'focus': {
        type: Boolean,
        value: false
      },
      'autoHeight': {
        type: Boolean,
        value: false
      },
      'fixed': {
        type: Boolean,
        value: false
      },
      'textareaClass': {
        type: String,
        default: ''
      },
      'textareaStyle': {
        type: String,
        default: ''
      },
      'virtualTextareaStyle': {
        type: String,
        default: ''
      },
      'cursorSpacing': {
        type: Number,
        value: 0
      },
      'cursor': {
        type: Number,
        value: -1
      },
      'showConfirmBar': {
        type: Boolean, 
        value: true
      },
      'selectionStart': {
        type: Number,
        value: -1
      },
      'selectionEnd': {
        type: Number,
        value: -1
      },
      'adjustPosition': {
        type: Boolean,
        value: true
      },
      'holdKeyboard': {
        type: Boolean,
        value: false
      },
      'disableDefaultPadding': {
        type: Boolean,
        default: true
      }
    },
    
    data() {
      return {
        showTextArea: false,
        autoFocus: false,
      }
    },
    
    methods: {
      handleInput(event) {
        this.$emit('input', event)
      },
      handleTap() {
        if (this.disabled) return
        this.showTextArea = true
        this.autoFocus = true
      },
      handleBlur(event) {
        this.showTextArea = false
        this.autoFocus = false
        this.$emit('blur', event)
      },
      handleFocus(event) {
        this.$emit('focus', event)
      },
      handleLineChange(event) {
        this.$emit('linechange', event)
      },
      handleConfirm(event) {
        this.$emit('confirm', event)
      },
      handleKeyboardHeightChange(event) {
        this.$emit('keyboardheightchange', event)
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap {
    position: relative;
    z-index: 1;
    width: 590rpx;
    height: 150rpx;
  }
  .placeholder {
    position:absolute;
    top: 0;
    left: 0;
    z-index: -1;
    color: #999;
    font-size: 30rpx;
    font-weight: 400;
    line-height: 1.4rem;
  }
  .textarea {
    font-size: 30rpx;
    font-weight: 400;
    line-height: 1.4rem;
    display: block;
    padding: 0;
    width: auto;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    color: #101010;
  }
</style>

