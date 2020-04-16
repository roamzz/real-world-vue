<template>
  <div>
    <h1 class="test">Event List</h1>

    <event-card></event-card>


  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
export default {
components: {
    EventCard,
},};
</script>

<style lang="scss" scoped>
h1 {
  color: $purple;
}
</style>
