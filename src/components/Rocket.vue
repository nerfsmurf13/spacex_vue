<template>
	<div class="full-container">
		<div class="wide-card rocket">
			<h2>
				{{ rocketData.rocket_name }}
			</h2>
			<div class="column">
				<div class="left">
					<img :src="rocketData.flickr_images[0]" alt />
					<!-- <Slider :imageArray="rocketData.flickr_images" /> -->
				</div>
				<div class="right">
					<div class="desc">{{ rocketData.description }}</div>
					<div class="table-data">
						<table>
							<tr>
								<td>Active</td>
								<td v-if="rocketData.active">Yes</td>
								<td v-else="">No</td>
							</tr>
							<tr>
								<td>Stages</td>
								<td>{{ rocketData.stages }}</td>
							</tr>
							<tr>
								<td>Boosters</td>
								<td>{{ rocketData.boosters }}</td>
							</tr>
							<tr>
								<td>Launch Cost</td>
								<td>$ {{ formatPrice(rocketData.cost_per_launch) }}</td>
							</tr>
							<tr>
								<td>Success %</td>
								<td>{{ rocketData.success_rate_pct }}</td>
							</tr>
							<tr>
								<td>First Flight</td>
								<td>{{ rocketData.first_flight }}</td>
							</tr>
							<tr>
								<td>Country</td>
								<td>{{ rocketData.country }}</td>
							</tr>
							<tr>
								<td>Company</td>
								<td>{{ rocketData.company }}</td>
							</tr>
							<tr>
								<td>Height</td>
								<td>
									{{ rocketData.height.meters }} m ({{ rocketData.height.feet }}
									ft)
								</td>
							</tr>
							<tr>
								<td>Diameter</td>
								<td>
									{{ rocketData.diameter.meters }} m ({{
										rocketData.diameter.feet
									}}
									ft)
								</td>
							</tr>
							<tr>
								<td>Mass</td>
								<td>
									{{ formatNumber(rocketData.mass.kg) }} kgs ({{
										formatNumber(rocketData.mass.lb)
									}}
									lbs)
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Rocket",
	components: {},
	props: {
		//rocketId: String
	},
	data() {
		return {
			rocketId: "",
			rocketData: []
		};
	},
	created() {
		this.rocketId = this.$route.params.id;
	},
	mounted: function() {
		this.fetchRocketData();
	},
	methods: {
		fetchRocketData: function() {
			const baseURI = `https://api.spacexdata.com/v3/rockets/${this.rocketId}`;
			this.$http.get(baseURI).then(result => {
				this.rocketData = result.data;
			});
		},
		formatPrice(value) {
			//Formats number into Dollar amounts
			let val = (value / 1).toFixed(2).replace(",", ".");
			return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		formatNumber(value) {
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/style.css">
.table-data {
}
</style>

