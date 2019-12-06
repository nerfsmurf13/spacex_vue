<template>
	<div :class="{'failed-launch':!launchSuccess,'future-launch':launched }" class="launch-card">
		<div class="content">
			<p>
				{{ flightNumber }}:
				<span class="name">{{ missionName }}</span>
			</p>
			<p>{{ launchYear }}</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "LaunchCard",
	props: {
		flightNumber: {
			type: Number,
			default: null
		},
		launchDate: {
			type: String,
			default: ""
		},
		launchYear: {
			type: String,
			default: ""
		},
		missionName: {
			type: String,
			default: ""
		},
		launchSuccess: {
			type: Boolean,
			default: true
		},
		launched: {
			type: Boolean,
			default: false
		}
	}
};
</script>
<style src="../styles/style.css">
</style>
