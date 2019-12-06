<template>
	<div>
		<div class="row">
			<div class="parent-container sub-col center-flex">
				<div  class="max-800 " v-for="(mission,index) in missions" :key="index" :missions="missions">
					<!-- <router-link :to="{ path: 'history/'+historyItem.id}"> -->
					<mission-card
						:missionName="mission.mission_name"
						:manufacturers="mission.manufacturers"
						:payloads="mission.payload_ids"
						:missionDetails="mission.description"
						:websiteLink="mission.website"
						:twitterLink="mission.twitter"
						:wikiLink="mission.wikipedia"
					/>
					<!-- </router-link> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MissionCard from "../components/MissionCard";

export default {
	name: "Missions",
	components: {
		MissionCard
	},
	data() {
		return {
			missions: [],
			filterRocket: "",
			filterSuccess: "",
			qRocket: "",
			qLaunchGood: "",
			search: "",
			url: "https://api.spacexdata.com/v3/missions"
		};
	},

	mounted: function() {
		this.fetchMissions();
	},

	methods: {
		fetchMissions() {
			let baseURI = this.url + "?" + this.qRocket + this.qLaunchGood;
			this.$http.get(baseURI).then(result => {
				this.missions = result.data;
				let filteredDataBySearch = [];
				if (this.search !== "") {
					filteredDataBySearch = this.missions.filter(
						obj =>
							obj.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
					);
					this.missions = filteredDataBySearch;
				}
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
<style src="../styles/style.css"></style>