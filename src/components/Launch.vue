<template>
	<div>
		<h2>{{ launchData.mission_name }}</h2>
		<!-- <img :src="launchData.flickr_images[0]" alt="" /> -->
		<!-- <Slider :imageArray="rocketData.flickr_images" /> -->
		<ul>
			<h3>info below</h3>
			<h4>Page id {{ $route.params.id }}</h4>
			<div class="desc">
				<p>{{ launchData.description }}</p>
				<p>Rocket: {{ launchData.rocket.rocket_name }}</p>
				<p>Launch Date: {{ launchData.launch_date_utc }}</p>
				<p>Launch Site: {{ launchData.launch_site.site_name }}</p>
				<p>Youtube: {{ launchData.links.video_link }}</p>
				<p>Details: {{ launchData.details }}</p>
				<p>Success: {{ launchData.launch_success }}</p>
				<p>Payload Count?: {{ launchData.rocket.second_stage.payloads.length}}</p>
				<p>Payload: {{ launchData.rocket.second_stage.payloads[0].payload_id }}</p>
				<p>Customers: {{ launchData.rocket.second_stage.payloads[0].customers }}</p>
				<p>Nationality: {{ launchData.rocket.second_stage.payloads[0].nationality }}</p>
				<p>Type: {{ launchData.rocket.second_stage.payloads[0].payload_type }}</p>
				<p>Pounds (lbs): {{ launchData.rocket.second_stage.payloads[0].payload_mass_lbs }}</p>
				<p>Destination: {{ launchData.rocket.second_stage.payloads[0].orbit }}</p>
			</div>
			<img :src="launchData.links.mission_patch_small" />
		</ul>
	</div>
</template>

<script>
export default {
	name: "Launch",
	components: {},
	props: {},
	data() {
		return {
			launchData: [],
			launchId: "",
			searchBox: ""
		};
	},
	created() {
		this.launchId = this.$route.params.id;
	},
	mounted: function() {
		this.fetchLaunchData();
	},
	methods: {
		fetchLaunchData: function() {
			const baseURI = `https://api.spacexdata.com/v3/launches/${this.launchId}`;
			this.$http.get(baseURI).then(result => {
				this.launchData = result.data;
			});
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
	text-align: center;
}
img {
	width: 200px;
}
</style>
