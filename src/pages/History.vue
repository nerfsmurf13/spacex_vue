<template>
	<div>
		<div class="row">
			<div class="full-container">
				<div v-for="(historyItem,index) in history" :key="index" :history="history">
					<!-- <router-link :to="{ path: 'history/'+historyItem.id}"> -->
					<history-card
						:articleName="historyItem.title"
						:articleDate="historyItem.event_date_utc"
						:flightNumber="historyItem.flight_number"
						:articleDetails="historyItem.details"
						:redditLink="historyItem.links.reddit"
						:newsLink="historyItem.links.article"
						:wikiLink="historyItem.links.wikipedia"
					/>
					<!-- </router-link> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HistoryCard from "../components/HistoryCard";

export default {
	name: "History",
	components: {
		HistoryCard
	},
	data() {
		return {
			history: [],
			filterRocket: "",
			filterSuccess: "",
			qRocket: "",
			qLaunchGood: "",
			search: "",
			url: "https://api.spacexdata.com/v3/history"
		};
	},

	mounted: function() {
		this.fetchHistory();
	},

	methods: {
		fetchHistory() {
			let baseURI = this.url + "?" + this.qRocket + this.qLaunchGood;
			this.$http.get(baseURI).then(result => {
				this.history = result.data;
				let filteredDataBySearch = [];
				if (this.search !== "") {
					filteredDataBySearch = this.history.filter(
						obj =>
							obj.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
					);
					this.history = filteredDataBySearch;
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