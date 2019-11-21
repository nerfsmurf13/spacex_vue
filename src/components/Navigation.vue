<template>
  <div>
    <h1>Navigation</h1>
    <ul>
      <li>
        <router-link to="/launches">Launches</router-link>
      </li>
      <li>
        <router-link to="/rockets">Rockets</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
