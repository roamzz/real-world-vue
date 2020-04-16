<template>
  <div>
    <h1 class="test">Event Listing</h1>

    <event-card v-for="(event,index) in events" :key="index" :event="event"></event-card>

    <base-icon name="activity" width="48" height="48"></base-icon>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
export default {
  components: {
    EventCard
  },
data() {
    return {
        events: []
    }
},
  created() {
    this.$axios
      .get("events") // Does a get request
      .then(response => {
        this.events = response.data // <--- set the events when returned
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
