<template>
	<div>
		<h2>{{rocketData.rocket_name}}</h2>
		<img :src="`${rocketData.flickr_images[0]}`" />
		<ul>
			<h3>info below</h3>
			<h4>Page id {{$route.params.id}}</h4>
			<div class="desc">{{rocketData.description}}</div>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Rocket",
	props: {
		rocketId: String;
	},
	data() {
		return {
			//
			rocketData: []
		};
	},
	mounted: function() {
		this.fetchRocketData();
	},
	created() {
		//this.rocketId = this.$route.params.rocketId;
	},
	methods: {
		fetchRocketData: function() {
			const baseURI = `https://api.spacexdata.com/v3/rockets/${this.rocketId}`;
			this.$http.get(baseURI).then(result => {
				this.rocketData = result.data;
			});
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
	width: 100vw;
}
</style>
