<template>
	<div
		:class="{ 'failed-launch': !launchSuccess, 'future-launch': launched }"
		class="launch-card"
	>
		<div class="content">
			<p>
				{{ flightNumber }}:
				<span class="name">{{ missionName }}</span>
			</p>
			<p>{{ timeConvert(launchDate) }}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "LaunchCard",
	props: {
		flightNumber: {
			type: Number,
			default: null,
		},
		launchDate: {
			type: Number,
			default: "",
		},
		missionName: {
			type: String,
			default: "",
		},
		launchSuccess: {
			type: Boolean,
			default: true,
		},
		launched: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
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
				"Dec",
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
		},
	},
};
</script>
<style src="../styles/style.css">
</style>
