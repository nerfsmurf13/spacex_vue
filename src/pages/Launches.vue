<template>
	<div>
		<h2>Launches</h2>
		<div class="launch-container">
<!-- FILTER SIDEBAR NEEDED -->
			<div v-for="launch in launches">
				<router-link
					:to="{ path: 'launch/'+launch.flight_number}"
				>
				<launch-card :missionName='launch.mission_name' :flightNumber='launch.flight_number' :launchYear='launch.launch_year' :launchSuccess='launch.launch_success' :launched='launch.upcoming' :launchId='launch.flight_number'/>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import launchCard from "../components/launchCard";

export default {
	name: "Launches",
	components:{
		launchCard
	},
	data() {
		return {
			launches: []
		};
	},
	mounted: function() {
		this.fetchLaunches();
	},
	methods: {
		fetchLaunches: function() {
			const baseURI = "https://api.spacexdata.com/v3/launches";
			this.$http.get(baseURI).then(result => {
				this.launches = result.data;
			});
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  text-align: center;
}
.launch-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width:100%;
  
}</style>
