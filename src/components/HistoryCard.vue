<template>
	<div class="wide-card">
		<div class="top">
			<span class="name">{{ articleName }}</span>
		</div>
		<div class="middle">
			<span v-if="flightNumber != null">Launch {{ flightNumber }} |</span>
			{{ timeConvert(articleDate) }}
			<div v-if="!readMore">
				{{ missionDetailsShort }}
				<a v-if="long" v-on:click="readMore = true">Read More</a>
			</div>
			<div v-if="readMore">
				{{ articleDetails }}
				<a v-if="long" v-on:click="readMore = false">Read Less</a>
			</div>
		</div>

		<div class="external-links bottom">
			<div v-if="redditLink">
				<a :href="redditLink">
					<button>Reddit Article</button>
				</a>
			</div>
			<div v-if="newsLink">
				<a :href="newsLink">
					<button>News Article</button>
				</a>
			</div>
			<div v-if="wikiLink">
				<a :href="wikiLink">
					<button>Wiki Article</button>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "HistoryCard",
	props: {
		articleName: {
			type: String,
			default: null,
		},
		articleDate: {
			type: Number,
			default: 0,
		},
		flightNumber: {
			type: Number,
			default: 0,
		},
		articleDetails: {
			type: String,
			default: "",
		},
		redditLink: {
			type: String,
			default: "",
		},
		newsLink: {
			type: String,
			default: "",
		},
		wikiLink: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			shortDescLength: 50,
			missionDetailsShort: "",
			words: [],
			readMore: true,
			long: false,
		};
	},
	mounted: function () {
		this.buildShortDetails();
	},
	methods: {
		buildShortDetails() {
			this.words = this.articleDetails.split(" ");
			if (this.words.length > this.shortDescLength) {
				this.long = true;
				this.readMore = false;
				for (let word = 0; word < this.shortDescLength; word++) {
					this.missionDetailsShort += this.words[word] + " ";
				}
				this.missionDetailsShort += "...";
			}
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
<style src="../styles/style.css"></style>
