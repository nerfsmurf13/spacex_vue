<template>
	<div class="wide-card">
		<div class="top">
			<span class="name">{{ missionName }}</span>
		</div>
		<div class="middle">
			<div v-if="!readMore">
				{{ missionDetailsShort }}
				<a v-if="long" v-on:click="readMore=true">Read More</a>
			</div>
			<div v-if="readMore">
				{{ missionDetails }}
				<a v-if="long" v-on:click="readMore=false">Read Less</a>
			</div>
		</div>
		<div class="row-space-evenly">
			<div class="fourfourth">
				Payload(s):
				<div class="row wrap center">
					<div
						v-for="(payload,index) in payloads"
						:key="index"
						:payloads="payloads"
						class="btn-small-white"
					>{{payload}}</div>
				</div>
			</div>
		</div>
		<div class="external-links bottom">
			<div v-if="websiteLink!=null">
				<a :href="websiteLink">
					<button>Official Website</button>
				</a>
			</div>
			<div v-if="twitterLink!=null">
				<a :href="twitterLink">
					<button>Twitter</button>
				</a>
			</div>
			<div v-if="wikiLink!=null">
				<a :href="wikiLink">
					<button>Wiki Article</button>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "MissionCard",
	props: {
		missionName: {
			type: String,
			default: null
		},
		manufacturers: {
			type: Array,
			default: null
		},
		payloads: {
			type: Array,
			default: null
		},
		missionDetails: {
			type: String,
			default: ""
		},
		websiteLink: {
			type: String,
			default: ""
		},
		twitterLink: {
			type: String,
			default: ""
		},
		wikiLink: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			shortDescLength: 50,
			missionDetailsShort: "",
			words: [],
			readMore: true,
			long: false
		};
	},
	mounted: function() {
		this.buildShortDetails();
	},
	methods: {
		buildShortDetails() {
			this.words = this.missionDetails.split(" ");
			if (this.words.length > this.shortDescLength) {
				this.long = true;
				this.readMore = false;
				for (let word = 0; word < this.shortDescLength; word++) {
					this.missionDetailsShort += this.words[word] + " ";
				}
				this.missionDetailsShort += "... ";
			}
		}
	}
};
</script>
<style src="../styles/style.css"></style>
