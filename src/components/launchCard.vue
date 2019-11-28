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
<style scoped>
.launch-card {
	width: 200px;
	min-height: 73px;
	overflow: hidden;
	background-color: white;
	border-left: solid 5px green;
	display: flex;
	justify-content: center;
	/* flex-grow: 1; */
	text-align: center;
	align-items: center;
	padding: 0.5rem;
	margin: 0.5rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.launch-card:hover {
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.content {
}

.name {
	font-weight: 600;
}

.failed-launch {
	border-left: solid 5px red;
}

.future-launch {
	border-left: solid 5px blue;
}

.launch-card img {
	width: 100%;
}
</style>
