// components/multiInput/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['textarea-class', 'wrap-class', 'placeholder-class'],
  properties: {
    "value": {
      type: String,
      default: ''
    },
    "placeholder": {
      type: String,
      default: ''
    },
    "placeholderStyle": {
      type: String,
      default: ''
    },
    "disabled": {
      type: Boolean,
      default: false
    },
    "maxlength": {
      type: Number,
      value: -1
    },
    "focus": {
      type: Boolean,
      value: false
    },
    "autoHeight": {
      type: Boolean,
      value: false
    },
    "fixed": {
      type: Boolean,
      value: false
    },
    "textareaStyle": {
      type: String,
      default: ''
    },
    "virtualTextareaStyle": {
      type: String,
      default: ''
    },
    "cursorSpacing": {
      type: Number,
      value: 0
    },
    "cursor": {
      type: Number,
      value: -1
    },
    "showConfirmBar": {
      type: Boolean,
      value: true
    },
    "selectionStart": {
      type: Number,
      value: -1
    },
    "selectionEnd": {
      type: Number,
      value: -1
    },
    "adjustPosition": {
      type: Boolean,
      value: true
    },
    "holdKeyboard": {
      type: Boolean,
      value: false
    },
    "disableDefaultPadding": {
      type: Boolean,
      default: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showTextArea: false,
    autoFocus: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInput(event) {
      this.setData({
        value: event.detail.value
      })
      this.triggerEvent("input", event.detail)
    },
    handleTap() {
      this.setData({
        showTextArea: true,
        autoFocus: true,
      })
    },
    handleBlur(event) {
      this.setData({
        showTextArea: false,
        autoFocus: false,
      })
      this.triggerEvent("blur", event.detail)
    },
    handleFocus(event) {
      this.triggerEvent("focus", event.detail)
    },
    handleLineChange(event) {
      this.triggerEvent("linechange", event.detail)
    },
    handleConfirm(event) {
      this.triggerEvent("confirm", event.detail)
    },
    handleKeyboardHeightChange(event) {
      this.triggerEvent("keyboardheightchange", event.detail)
    }
  }
})
