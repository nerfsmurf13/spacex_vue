<template>
	<div>
		<h2>Rockets</h2>
		<ul>
			<li v-for="rocket in rockets">
				<router-link
					:to="{ path: 'rocket/'+rocket.rocket_id, params: { rocketId: rocket.rocket_id } }"
				>{{rocket.id}} {{rocket.rocket_name}} {{rocket.first_flight}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Rockets",
	data() {
		return {
			rockets: []
		};
	},
	mounted: function() {
		this.fetchRockets();
	},
	methods: {
		fetchRockets: function() {
			const baseURI = "https://api.spacexdata.com/v3/rockets";
			this.$http.get(baseURI).then(result => {
				this.rockets = result.data;
			});
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
