<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input
        @input="updateValue"
        :value="value"
        v-bind="$attrs"
        />
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin'

export default {
mixins: [formFieldMixin], // register mixin
//inheritAttrs: false,
  props: {
    //label: String,
    value: [String, Number]
  },

//  methods: {
//    updateValue(event) {
//      // <-- method triggered by input event
//      this.$emit("input", event.target.value);
//    }
//  }
};
</script>

<style lang="scss" scoped>
</style>