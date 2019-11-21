<template>
  <div>
    <h2>Launches</h2>
    <ul>
      <li v-for="launch in launches">
          <router-link :to="{ path: 'launches/:id'}">{{launch.flight_number}} {{launch.launch_year}} {{launch.mission_name}}</router-link>
        
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "Launches",
  data() {
    return {
      launches: []
    };
  },
  methods: {
    fetchLaunches: function() {
      const baseURI = "https://api.spacexdata.com/v3/launches";
      this.$http.get(baseURI).then(result => {
        this.launches = result.data;
      });
    }
  },
  mounted: function(){
    this.fetchLaunches()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
