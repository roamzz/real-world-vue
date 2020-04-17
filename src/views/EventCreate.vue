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
<p>{{ getEventById(1)}}</p>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["catLength", "activeTodosCount", "doneTodos" , "getEventById"]),
    //catLength() {
    //  return this.$store.getters.catLength;
    //},
    //todosLength() {
    //  return this.$store.getters.activeTodosCount;
    //},
    //doneTodos() {
    //  return this.$store.getters.doneTodos;
    //},
    //getEvent() {
    //  return this.$store.getters.getEventById;
    //},
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