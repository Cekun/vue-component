<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>vuex-test-count: {{$store.state.count}}</p>
    <button @click="addCount">Add</button>
    {{$store.getters.score}}
    <button @click="asyncAdd">AsyncAdd</button>
  </div>
</template>

<script>
export default {
  methods: {
    addCount() {
      this.$store.commit('updateCount', 2)  //commit是mutation
    },
    async asyncAdd() {
      const result = await this.$store.dispatch('asyncAdd', 3)  // dispatch是action
      if(result.ok === 1){
        alert('act success!')
      }
    }
  },
}
</script>
