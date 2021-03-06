<template>
  <ValidationProvider :rules="rules">
  <div class="multiple-radio-container">
    <span v-if="title" id="form-multiple-title">{{
      title
    }}</span>
    <div class="group-container">
      <div v-for="option in options" :key="option.value">
        <label
          :disabled="option.disabled"
          class="input-label input-container"
          :class="{ 'input-label-disabled': option.disabled }"
        >
          <input
            v-model="checkedValue"
            :value="option.value"
            :disabled="option.disabled"
            @change="emitInput"
            type="radio"
            class="radio"
          />
          <span class="radio-text"> {{ option.text }}</span>
        </label>
      </div>
    </div>
  </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules.umd.js'

extend('required', required)

export default {
  name: 'FormMultipleRadio',
  components: {
    ValidationProvider
  },
  props: {
    title: {
      type: String
    },
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    value: {
      type: [Number, String, Boolean, Array]
    },
    rules: {
      type: [Object, String]
    }
  },
  computed: {
    notDisabledOptions () {
      return this.options.filter((option) => !option.disabled)
    }
  },
  data () {
    return {
      checkedValue: this.value
    }
  },
  methods: {
    emitInput () {
      this.$emit('input', this.checkedValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.multiple-radio-container {
  width: 100%;
}
#form-multiple-title {
  font-weight: bold;
}
.input-container {
  display: flex;
  align-items: center;
  margin: 12px 0 0 0;
  cursor: pointer;
}
input.radio {
  position: relative;
  min-width: 20px;
  height: 20px;
  margin-right: 8px;
  border: 2px solid lightgray;
  box-sizing: border-box;
  border-radius: 50%;
  appearance: none;
  cursor: pointer;
  &:hover {
    border: 2px solid lightblue;
    transition: 0.5s;
  }
  &:focus {
    outline: none;
    border-color: lightblue;
  }
  &::before {
    position: absolute;
    content: "";
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: lightblue;
    border-radius: 50%;
    opacity: 0;
    &:disabled {
      border-color: #fff;
    }
  }
  &:checked {
    border-color: lightblue;
    background: #fff;
    &::before {
      opacity: 1;
    }
    &:disabled {
      background: lightgrey;
      border-color: lightgrey;
      color: #fff;
    }
  }
.input-label {
  cursor: pointer;
  &-disabled {
    color: lightgray;
  }
  }
}
.form-description {
  color: lightgray;
}
.radio-text {
  font-size: 14px;
  margin: 4px 0 0 0;
  &:hover {
    color: rgb(73, 195, 235);
  }
}
@media screen and (max-width: 580px) {
  .input-container {
    text-align: left;
  }
}
</style>
