<template>
	<div>
		<div class="desc">
			<div class="desc-top">
				<h2>{{ launchData.mission_name }}</h2>
			</div>
			<div class="desc-middle">
				<div class="desc-left">
					<div
						class="desc-left-patch"
						v-if="launchData.links.mission_patch_small"
					>
						<div class="desc-left-patch-thumb">
							<p class="heading">Mission Patch</p>
							<img :src="launchData.links.mission_patch_small" />
						</div>
					</div>

					<div class="desc-left-youtube" v-if="launchData.links.video_link">
						<div class="desc-left-youtube-thumb">
							<p class="heading">Video</p>
							<a :href="launchData.links.video_link" target="_blank">
								<img :src="youtubeThumbnail(youtubeLink)" alt="" />
							</a>
						</div>
					</div>
					<div class="desc-right-container">
						<p class="heading">Type</p>
						<p>
							{{ launchData.rocket.second_stage.payloads[0].payload_type }}
						</p>
					</div>
					<div class="desc-right-container" v-if="launchData.rocket.second_stage.payloads[0].payload_mass_lbs">
						<p class="heading" >Pounds (lbs)</p>
						<p>
							{{ launchData.rocket.second_stage.payloads[0].payload_mass_lbs }}
						</p>
					</div>
					<div class="desc-right-container">
						<p class="heading">Destination</p>
						<p>
							{{ launchData.rocket.second_stage.payloads[0].orbit }}
						</p>
					</div>
				</div>
				<div class="desc-right">
					<div class="desc-right-container">
						<p class="heading">Rocket</p>
						<router-link
							:to="{ path: '../rocket/' + launchData.rocket.rocket_id }"
						>
							<div class="btn-small">
								{{ launchData.rocket.rocket_name }}
							</div>
						</router-link>
					</div>
					<div class="desc-right-container">
						<p class="heading">Launch Date</p>
						<p>{{ timeConvert(launchData.launch_date_unix) }}</p>
					</div>
					<div class="desc-right-container">
						<p class="heading">Launch Site</p>
						<p>{{ launchData.launch_site.site_name }}</p>
					</div>
					<div class="desc-right-container" v-if="launchData.details">
						<p class="heading">Launch Details</p>
						<p>{{ launchData.details }}</p>
					</div>
					<div class="desc-right-container">
						<p class="heading">Status</p>
						<p v-if="launchData.launch_success">Accent Success</p>
						<p v-if="launchData.launch_success==false">Accent Fail</p>
						<p v-else-if="launchData.launch_success == null">Launch Pending <br> {{timeConvert(launchData.launch_date_unix)}}</p>
					</div>
					<div class="desc-right-container">
						<p class="heading">
							Payload ({{ launchData.rocket.second_stage.payloads.length }})
						</p>
						<p>
							{{ launchData.rocket.second_stage.payloads[0].payload_id }}
						</p>
					</div>
					<div class="desc-right-container">
						<p class="heading">Customers</p>
						<p>
							<div
						v-for="(payload,index) in launchData.rocket.second_stage.payloads[0].customers"
						:key="index"
						:payloads="launchData.rocket.second_stage.payloads[0].customers"
						class="btn-white"
					>{{payload}}</div>
						</p>
					</div>
					<div class="desc-right-container">
						<p class="heading">Nationality</p>
						<p>
							{{ launchData.rocket.second_stage.payloads[0].nationality }}
						</p>
					</div>

					<!-- <div class="desc-right-container"></div>
					<p>{{ launchData.description }}</p> -->
				</div>
			</div>
		</div>
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
			searchBox: "",
			youtubeLink: ""
		};
	},
	computed: {},
	created() {
		this.launchId = this.$route.params.id;
		// this.fetchLaunchData();
	},
	beforeUpdate() {},
	mounted: function() {
		this.fetchLaunchData();
	},

	methods: {
		fetchLaunchData: function() {
			const baseURI = `https://api.spacexdata.com/v3/launches/${this.launchId}`;
			this.$http.get(baseURI).then(result => {
				this.launchData = result.data;
				this.getYoutubeId();
			});
		},
		getYoutubeId: function() {
			this.youtubeLink = this.launchData.links.video_link.replace(
				"https://www.youtube.com/watch?v=",
				""
			);
		},
		youtubeThumbnail: function(id) {
			return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
		},
		timeConvert(a) {
			// Unixtimestamp
			let unixtimestamp = a;
			// Months array
			let months_arr = [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			];
			// Convert timestamp to milliseconds
			let date = new Date(unixtimestamp * 1000);
			// Year
			let year = date.getFullYear();
			// Month
			let month = months_arr[date.getMonth()];
			// Day
			let day = date.getDate();
			// Hours
			let hours = date.getHours();
			// Minutes
			let minutes = "0" + date.getMinutes();
			// Seconds
			let seconds = "0" + date.getSeconds();
			// Display date time in MM-dd-yyyy h:m:s format
			// let convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
			let convdataTime = month + " " + day + ", " + year;
			return convdataTime;
		}
	}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*,
*::before,
*::after {
	box-sizing: border-box;
}

.heading {
	font-size: 1.2rem;
	font-weight: 800;
	margin-bottom: 0.5rem;
}

.desc {
	width: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.desc-top {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* margin-top: 1rem; */
	font-size: 2rem;
}

.desc-middle {
	display: flex;
	/* flex-direction: row; */
	/* display size change */
	/* flex-flow: column; */
	flex-direction: column-reverse;
}

.desc-left {
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	width: 300px;
	margin: 0.5rem;
}
.desc-left img {
	height: auto;
	width: 100%;
}
.desc-left-youtube img {
	height: auto;
	width: 100%;
}
.desc-right {
	display: flex;
	flex-direction: column;
	text-align: center;
	box-sizing: border-box;
	width: 300px;
	margin: 0.5rem;

	/* align-items: center; */
}
.desc-right-container {
	/* padding: 0.5rem 1rem; */
	/* border: 1px solid black; */
	width: 100%;
	/* border-radius: 1rem; */
	background-color: white;
	/* overflow: hidden; */
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
h2 {
	text-align: center;
}

/* img {
	width: 200px;
} */

.desc-left-youtube,
.desc-left-patch,
.desc-right-container {
	display: flex;
	flex-direction: column;
	background-color: white;

	text-align: center;
	/* margin: 0.5rem; */
	padding: 0.5rem;
	margin-bottom: 1rem;
	/* border: solid 1px black; */
	/* border-radius: 1rem; */
	width: 100%;
	overflow: hidden;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.desc-left-youtube:hover {
	box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
}

.btn-small {
	/* background-color: white;
	border: 1px solid grey;
	border-radius: 5px; */
	padding: 0.25rem;
	margin: 0.25rem;
	background-color: white;
	justify-content: center;
	text-align: center;
	align-items: center;
	/* padding: 0.25rem;
	margin: 0.25rem; */
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	/* font-size: 0.7rem; */
}

.btn-small:hover {
	background: #2196f3;
	color: white;
}

@media screen and (min-width: 768px) {
	.desc-middle {
		flex-direction: row;
	}
}
</style>
