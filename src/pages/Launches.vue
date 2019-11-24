<template>
	<div>
		<div class="row">
			<div class="sidebar">
				<div class="category">
					<h2>Launches</h2>
				</div>
				<div class="search-bar">
					<input type="text" placeholder="Search" />
				</div>
				<div class="filter">
					<!-- <p>Date Range</p> -->
					<div class="rocket-used">
						<fieldset class="sidebar-title">
							<!-- <p class="sidebar-title">Rocket Used</p>
							<label @mouseup.left="queryBuilder('')" class="radio-pair">
								Any
								<input class="radio-input" type="radio" name="rocket_id" value />
								<span class="checkmark"></span>
							</label>
							<label @mouseup.left="queryBuilder('rocket_id=falcon1&')" class="radio-pair">
								Falcon 1
								<input class="radio-input" type="radio" name="rocket_id" value="falcon1" />
								<span class="checkmark"></span>
							</label>
							<label @mouseup.left="queryBuilder('rocket_id=falcon9&')" class="radio-pair">
								Falcon 9
								<input class="radio-input" type="radio" name="rocket_id" value="falcon9" />
								<span class="checkmark"></span>
							</label>
							<label @mouseup.left="queryBuilder('rocket_id=falconheavy&')" class="radio-pair">
								Falcon Heavy
								<input class="radio-input" type="radio" name="rocket_id" value="falconheavy" />
								<span class="checkmark"></span>
							</label>
							<label @mouseup.left="queryBuilder('rocket_id=starship&')" class="radio-pair">
								Starship
								<input class="radio-input" type="radio" name="rocket_id" value="starship" />
								<span class="checkmark"></span>
							</label>-->
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
						</fieldset>
					</div>

					<div class="successful-launch">
						<fieldset>
							<p class="sidebar-title">Succesful Launch</p>
							<label class="radio-pair">
								Any
								<input class="radio-input" type="radio" name="successful-launch" value />
								<span class="checkmark"></span>
							</label>
							<label @mouseup.left="queryBuilder('launch_success=true&')" class="radio-pair">
								Yes
								<input class="radio-input" type="radio" name="successful-launch" value="falcon1" />
								<span class="checkmark"></span>
							</label>
							<label @mouseup.left="queryBuilder('launch_success=false&')" class="radio-pair">
								No
								<input class="radio-input" type="radio" name="successful-launch" value="falcon9" />
								<span class="checkmark"></span>
							</label>
						</fieldset>
					</div>
					<!-- <p>Landing Succesful</p>
					<p>Landing Vehicle</p>-->
					<!-- <p>customer</p> -->
					<!-- <p>nationality</p>
					<p>manufacturer</p>
					<p>payload_type</p>
					<p>orbit</p>-->
					<p>Total: {{launches.length}}</p>
					<p>Apply Filter</p>
					<p>Clear Filter</p>
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
			filterSuccess: true,
			qString: "",
			url: "https://api.spacexdata.com/v3/launches"
		};
	},
	mounted: function() {
		this.fetchLaunches();
	},

	methods: {
		fetchLaunches() {
			let baseURI = this.url + "?" + this.qString;
			this.$http.get(baseURI).then(result => {
				this.launches = result.data;
			});
		},
		filterShip(e) {
			//console.log(e);
			let rocketId = e;
			this.filterRocket = e;
			if (!this.filterRocket === rocketId) {
				this.filterRocket = rocketId;

				// console.log("removed " + rocketId + " at index");
			} else {
				//this.filterRocket = "";
			}
			this.rocketQueryStringer();
			// if (!this.filterRocketArray.includes(rocketId)) {
			// 	this.filterRocketArray.push(rocketId);
			// 	console.log("added " + rocketId);
			// 	this.rocketQueryStringer();
			// 	return;
			//this.queryStringer();
			// }
		},
		// refreshLaunches(q) {
		// 	this.q = q || "";
		// 	this.fetchLaunches(q);
		// },

		rocketQueryStringer() {
			//this.qString = "";
			//let prefix = ;
			this.qString = "rocket_id=" + this.filterRocket + "&";
			this.fetchLaunches();
		}
		// this.q.forEach(e => {
		// 	this.qString = this.qString + e;
		// });
		// 	this.fetchLaunches();
		// },

		// queryBuilder(input) {
		// 	let str = input;
		// 	if (this.q.includes(str)) {
		// 		let ind = this.q.indexOf(str);
		// 		this.q.splice(ind, 1);
		// 		console.log("removed " + str + " at index" + ind);
		// 	} else {
		// 		this.q.push(str);
		// 		console.log("added " + str);
		// 		this.queryStringer();
		// 	}
		// }
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

.fill {
	box-sizing: border-box;
}

.search-bar input[type="text"] {
	font-size: 2rem;
	width: 150px;
	border: 0;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	text-align: center;
}

button {
	background-color: white;
	border: 0;
	padding: 0.5rem 0.5rem;
	font-size: 1.3rem;
	border-radius: 10px;
	width: 150px;
	margin: 0.5rem 0;
}
.btn-active {
	background-color: #2196f3;
	color: white;
}
</style>
