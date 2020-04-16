<template>
  <h1>This is user {{ username}}'s page</h1>
</template>

<script>
export default {
props: {
    username: {
        type: String,
        default: ''
    },
},

}
</script>

<style>

</style>