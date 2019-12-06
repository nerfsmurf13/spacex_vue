<template>
	<div class="row">
		<div class="parent-container">
      <div class="sub-col">
        <h2 class="center">Rockets</h2>
			<div v-if="!loaded">LOADING</div>
			<div v-else class="rocket-container">
				
				
          
					<div v-for="rocket in rockets" :key="rocket">
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
			loaded: false,
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
				this.loaded = true;
			});
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/style.css">

</style>
