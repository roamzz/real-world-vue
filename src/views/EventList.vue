<template>
  <div>
    <h1 class="test">Event List</h1>

    <event-card></event-card>

    <base-icon name="activity" width="48" height="48"></base-icon>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
export default {
  components: {
    EventCard
  },
  created() {
    this.$axios
      .get("events") // Does a get request
      .then(response => {
        console.log(response.data); // For now, logs out the response
      })
      .catch(error => {
        console.log("There was an error:", error.response); // Logs out the error
      });
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: $purple;
}
</style>
