<template>
	<div class="row">
		<div class="sidebar">
			<div class="sidebar-section sticky">
				<div class="category">
					<h2>Launches</h2>
				</div>
				<form v-on:submit="fetchLaunches" class="search-bar">
					<input
						v-on:keyup="fetchLaunches"
						v-model="search"
						type="text"
						placeholder="Search"
					/>
				</form>
				<div class="filter">
					<!-- <p>Date Range</p> -->
					<div class="rocket-used">
						<p class="sidebar-title">Rocket Used</p>
						<button
							v-bind:class="{ 'btn-active': filterRocket == '' }"
							@mouseup.left="filterShip($event.target.value)"
							value
						>
							All
						</button>
						<button
							v-bind:class="{ 'btn-active': filterRocket == 'falcon1' }"
							@mouseup.left="filterShip($event.target.value)"
							value="falcon1"
						>
							Falcon 1
						</button>
						<button
							v-bind:class="{ 'btn-active': filterRocket == 'falcon9' }"
							@mouseup.left="filterShip($event.target.value)"
							value="falcon9"
						>
							Falcon 9
						</button>
						<button
							v-bind:class="{ 'btn-active': filterRocket == 'falconheavy' }"
							@mouseup.left="filterShip($event.target.value)"
							value="falconheavy"
						>
							Falcon Heavy
						</button>
						<button
							v-bind:class="{ 'btn-active': filterRocket == 'starship' }"
							@mouseup.left="filterShip($event.target.value)"
							value="starship"
						>
							Starship
						</button>
					</div>
					<div class="successful-launch">
						<p class="sidebar-title">Successful Launch</p>
						<button
							v-bind:class="{ 'btn-active': filterSuccess == '' }"
							@mouseup.left="filterLaunchGood($event.target.value)"
							value
						>
							All
						</button>
						<button
							v-bind:class="{ 'btn-active': filterSuccess == 'true' }"
							@mouseup.left="filterLaunchGood($event.target.value)"
							value="true"
						>
							Yes
						</button>
						<button
							v-bind:class="{ 'btn-active': filterSuccess == 'false' }"
							@mouseup.left="filterLaunchGood($event.target.value)"
							value="false"
						>
							No
						</button>
					</div>
					<p>Total: {{ launches.length }}</p>
					<button
						@mouseup.left="
							filterShip($event.target.value);
							filterLaunchGood($event.target.value);
						"
						class="btn-always"
						value
					>
						Clear Filter
					</button>
				</div>
			</div>
		</div>

		<div class="parent-container">
			<!-- LOADER -->
			<div v-if="!loaded" class="launch-container">
				<div v-for="i in 1" :key="i" class="center">
					<launch-card-placeholder :loadingWhat="'Launches'" />
				</div>
			</div>
			<!-- CONTENT -->
			<div v-else class="launch-container">
				<div class="center">
					<no-results v-if="launches.length == 0" />
				</div>

				<div
					v-for="(launch, index) in launches"
					:key="index"
					:launches="launches"
					class="center"
				>
					<router-link :to="{ path: 'launch/' + launch.flight_number }">
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
import LaunchCardPlaceholder from "../components/LaunchCardPlaceholder";
import NoResults from "../components/NoResults";

export default {
	name: "Launches",
	components: {
		LaunchCard,
		LaunchCardPlaceholder,
		NoResults
	},
	data() {
		return {
			loaded: false,
			placeHolder: "Loading...",
			launches: [],
			filterRocket: "",
			filterSuccess: "",
			qRocket: "",
			qLaunchGood: "",
			search: "",
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
				this.loaded = true;
				let filteredDataBySearch = [];
				if (this.search !== "") {
					filteredDataBySearch = this.launches.filter(
						obj =>
							obj.mission_name
								.toLowerCase()
								.indexOf(this.search.toLowerCase()) >= 0
					);
					this.loaded = true;
					this.launches = filteredDataBySearch;
				}
			});
		},
		filterShip(e) {
			this.loaded = false;
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
			this.loaded = false;
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
<style src="../styles/style.css" >
/* * {
	text-align: center;
} */
</style>
