<template>
  <div>
    <h1 class="test">Event for {{user.user.name }}</h1>
    <!--{{events}}-->

    Events total : {{ event.eventsTotal }}
    <event-card
      v-for="(event, index) in event.events"
      :key="index"
      :event="event"
    ></event-card>
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      |
    </template>

    <template v-if="page < event.eventsTotal / events_per_page">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }"
        >Next Page</router-link
      >
    </template>

    <!--<base-icon name="activity" width="48" height="48"></base-icon>-->
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      //  events: []
    };
  },
  created() {
    this.events_per_page = 3; // Setting perPage here and not in data means it won't be reactive.
    // We don't need it to be reactive, and this way our component has access to it.

    this.$store.dispatch("event/fetchEvents", {
      perPage: this.events_per_page,
      page: this.page
    });

    //this.$axios
    //  .get("events") // Does a get request
    //  .then(response => {
    //    this.events = response.data // <--- set the events when returned
    //  })
    //  .catch(error => {
    //    console.log("There was an error:", error.response); // Logs out the error
    //  });
  },
  computed: {
    page() {
      if (parseInt(this.$route.query.page)) {
        this.$store.dispatch("event/fetchEvents", {
          perPage: this.events_per_page,
          page: parseInt(this.$route.query.page)
        });
      }

      if (
        parseInt(this.$route.query.page) * this.events_per_page >
        this.event.eventsTotal
      ) {
        return Math.ceil(this.event.eventsTotal / this.events_per_page);
      }
      // What page we're currently on
      return parseInt(this.$route.query.page) || 1;
    },
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.events_per_page;
    },
    ...mapState(["event", "user"])
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: $purple;
}
</style>
