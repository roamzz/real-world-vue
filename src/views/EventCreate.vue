<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
        <BaseSelect
            v-model="event.category"
            :options="categories"
            label="Select a category"
            class="field"/>

      <h3>Name & describe your event</h3>
       <BaseInput
            v-model="event.title"
            label="Title"
            type="text"
            placeholder="Add an event title"
            class="field"/>

       <BaseInput
            v-model="event.description"
            label="Description"
            type="text"
            placeholder="Add an event description"
            class="field"/>

      <h3>Where is your event?</h3>
       <BaseInput
            v-model="event.location"
            label="Location"
            type="text"
            placeholder="Add an event location"
            class="field"/>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <BaseSelect
            v-model="event.time"
            :options="times"
            label="Select a time"
            class="field"/>
      </div>

   <BaseButton type="submit" buttonClass="-fill-gradient" >Submit</BaseButton>

      <!--<input type="submit" class="button -fill-gradient" value="Submit"/>-->

    </form>
  </div>
</template>


<script>
import Datepicker from 'vuejs-datepicker'
import NProgress from 'nprogress' // <--- Include NProgress

export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent() {
    NProgress.start()  // <-- Start the progress bar
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
         NProgress.done() // <-- if errors out stop the progress bar
        })
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
