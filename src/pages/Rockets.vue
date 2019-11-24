<template>
	<div>
		<h2>Rockets</h2>
		<div class="rocket-container">
			<div v-for="rocket in rockets">
				<router-link :to="{ path: 'rocket/'+rocket.rocket_id}">
					<rocket-card
						:name="rocket.rocket_name"
						:picture="rocket.flickr_images[0]"
						:first_flight="rocket.first_flight"
					/>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import RocketCard from "../components/RocketCard.vue";

export default {
	name: "Rockets",
	components: {
		RocketCard
	},
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
<style scoped>
* {
	text-align: center;
}
.rocket-container {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	width: 100%;
}
</style>
