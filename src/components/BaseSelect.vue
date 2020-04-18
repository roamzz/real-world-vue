<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <select
        @input="updateValue"
        :value="value"
        v-bind="$attrs"
    >
     <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === value"
    >
            {{ option }}
    </option>
    </select>
  </div>
</template>

<script>
export default {
inheritAttrs: false,
  props: {
    label: String,
    value: [String, Number],
    options: {
      type: Array,
      required : true
    }
  },

  methods: {
    updateValue(event) {
      // <-- method triggered by input event
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>