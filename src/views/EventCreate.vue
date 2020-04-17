<template>
  <div>
    <h1>Create an event {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <ol>
      <li v-for="(cat, index) in categories" :key="index">
        {{ cat }}
      </li>
    </ol>
    <small>There are {{ catLength }} categories.</small>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapState(["categories", "user"]) // <-- using object spread operator
  }
  //computed: mapState({
  //   user: 'user',
  //   categories:'categories'
  // })
};
</script>

<style lang="scss" scoped>
</style>