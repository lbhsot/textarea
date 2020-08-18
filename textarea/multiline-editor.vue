<template>
  <scroll-view scroll-y 
               class="wrapper"
               :class="wrapperClass">
    <view class="placeholder"
          :class="placeholderClass"
          v-if="!currentValue">{{ placeholder }}</view>
    <editor id="editor"
            :read-only="disabled"
            class="editor"
            :class="editorClass"
            @ready="onEditorReady"
            @input="handleInput"
            @blur="handleBlur"
            @focus="handleFocus"/>
  </scroll-view>
</template>

<script>
  export default {
    name: 'multiline-editor',

    props: {
      value: {
        type: String,
        default: ''
      },
      wrapperClass: {
        type: String,
        default: ''
      },
      editorClass: {
        type: String,
        default: ''
      },
      placeholderClass: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        editorCtx: null,
        currentValue: this.value,
      }
    },

    watch: {
      value(newVal, oldVal) {
        if (this.editorCtx && newVal !== oldVal && this.currentValue !== this.value) {
          this.setValue()
        }
      }
    },

    methods: {
      onEditorReady() {
        const view = uni.createSelectorQuery().in(this).select('.editor')
        if (view) {
          view.context((res) => {
            this.editorCtx = res.context
            this.setValue()
          }).exec()
        }
      },
      handleInput(event) {
        this.currentValue = event.detail.text.trim()
        this.$emit('input', {
          ...event,
          detail: {
            ...event.detail,
            value: this.currentValue
          }
        })
      },
      handleBlur(event) {
        this.$emit('blur', event)
      },
      handleFocus(event) {
        this.$emit('focus', event)
      },

      setValue() {
        if (!this.editorCtx)
          return
        const view = uni.createSelectorQuery().in(this).select('.editor')
        console.log(view)
        this.editorCtx.setContents({
          html: this.value,
          success: () => {
            this.currentValue = this.value
          },
        })
      },
    },
  }

</script>

<style scoped
       lang="less">
  .wrapper {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    background-color: transparent;
  }
  
  .placeholder {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    color: #999;
    font-size: 30rpx;
    font-weight: 400;
    line-height: normal!important;
  }

  .editor {
    width: 100%;
    height: auto;
    min-height: 150rpx;
    font-size: 30rpx;
    font-weight: 400;
    color: #101010;
    overflow: hidden;
    line-height: normal!important;
  }

</style>

