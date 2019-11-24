<template>
	<div>
		<div class="row">
			<div class="sidebar sticky">
				<div class="category">
					<h2>Launches</h2>
				</div>
				<div class="search-bar">
					<input type="text" placeholder="Search" />
				</div>
				<div class="filter">
					<!-- <p>Date Range</p> -->
					<div class="rocket-used">
						<p class="sidebar-title">Rocket Used</p>
						<button
							v-bind:class="{ 'btn-active': filterRocket==''}"
							@mouseup.left="filterShip($event.target.value)"
							value
						>All</button>
						<button
							v-bind:class="{ 'btn-active': filterRocket=='falcon1'}"
							@mouseup.left="filterShip($event.target.value)"
							value="falcon1"
						>Falcon 1</button>
						<button
							v-bind:class="{ 'btn-active': filterRocket=='falcon9'}"
							@mouseup.left="filterShip($event.target.value)"
							value="falcon9"
						>Falcon 9</button>
						<button
							v-bind:class="{ 'btn-active': filterRocket=='falconheavy'}"
							@mouseup.left="filterShip($event.target.value)"
							value="falconheavy"
						>Falcon Heavy</button>
						<button
							v-bind:class="{ 'btn-active': filterRocket=='starship'}"
							@mouseup.left="filterShip($event.target.value)"
							value="starship"
						>Starship</button>
					</div>
					<div class="successful-launch">
						<p class="sidebar-title">Succesful Launch</p>
						<button
							v-bind:class="{ 'btn-active': filterSuccess==''}"
							@mouseup.left="filterLaunchGood($event.target.value)"
							value
						>All</button>
						<button
							v-bind:class="{ 'btn-active': filterSuccess=='true'}"
							@mouseup.left="filterLaunchGood($event.target.value)"
							value="true"
						>Yes</button>
						<button
							v-bind:class="{ 'btn-active': filterSuccess=='false'}"
							@mouseup.left="filterLaunchGood($event.target.value)"
							value="false"
						>No</button>
					</div>
					<p>Total: {{launches.length}}</p>
					<button
						@mouseup.left="filterShip($event.target.value);filterLaunchGood($event.target.value)"
						class="btn-always"
						value
					>Clear Filter</button>
				</div>
			</div>

			<div class="launch-container">
				<!-- FILTER SIDEBAR NEEDED -->
				<div v-for="launch in launches">
					<router-link :to="{ path: 'launch/'+launch.flight_number}">
						<launch-card
							:missionName="launch.mission_name"
							:flightNumber="launch.flight_number"
							:launchYear="launch.launch_year"
							:launchSuccess="launch.launch_success"
							:launched="launch.upcoming"
							:launchId="launch.flight_number"
						/>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import LaunchCard from "../components/LaunchCard";

export default {
	name: "Launches",
	components: {
		LaunchCard
	},
	data() {
		return {
			launches: [],
			filterRocket: "",
			filterSuccess: "",
			qRocket: "",
			qLaunchGood: "",
			url: "https://api.spacexdata.com/v3/launches"
		};
	},
	mounted: function() {
		this.fetchLaunches();
	},

	methods: {
		fetchLaunches() {
			let baseURI = this.url + "?" + this.qRocket + this.qLaunchGood;
			this.$http.get(baseURI).then(result => {
				this.launches = result.data;
			});
		},
		filterShip(e) {
			let rocketId = e;
			this.filterRocket = e;
			if (!this.filterRocket === rocketId) {
				this.filterRocket = rocketId;
			}
			this.rocketQueryStringer();
		},
		rocketQueryStringer() {
			this.qRocket = "rocket_id=" + this.filterRocket + "&";
			this.fetchLaunches();
		},
		filterLaunchGood(e) {
			let launchSuccess = e;
			this.filterSuccess = e;
			if (!this.filterSuccess === launchSuccess) {
				this.filterSuccess = launchSuccess;
			}
			this.successQueryStringer();
		},
		successQueryStringer() {
			this.qLaunchGood = "launch_success=" + this.filterSuccess + "&";
			this.fetchLaunches();
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* * {
	text-align: center;
} */

.sidebar {
	font-size: 1.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.filter .rocket-used {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.filter .successful-launch {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.filter {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.category {
}

.sidebar-title {
	font-weight: 600;
}

.search-bar {
}

.radio-input {
}

.rocket-used {
}

.launch-container {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	width: 100%;
}

.search-bar input[type="text"] {
	font-size: 1.3rem;
	width: 150px;
	border: 0;
	border-radius: 10px;
	text-align: center;
	border: 2px solid #d1d1d1;
}

button {
	background-color: white;
	border: 0;
	padding: 0.5rem 0.5rem;
	font-size: 1.3rem;
	border-radius: 10px;
	width: 150px;
	margin: 0.5rem 0;
	border: 2px solid white;
	transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}
button:hover {
	border: 2px solid #2196f3;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.btn-active {
	background-color: #2196f3;
	color: white;
}
.btn-always {
	border: 2px solid #2196f3;
}
</style>
