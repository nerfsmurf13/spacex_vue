<template>
	<div class="launch-card">
		<div class="content">
			<span class="name">Loading{{dots}}</span>
		</div>
	</div>
</template>
<script>
export default {
	name: "LaunchCardPlaceholder",
	props: {
		loadingWhat: {
			type: String,
			default: ""
		}
		// zeroResults: {
		// 	type: Number,
		// 	default: 0
		// }
	},
	data() {
		return {
			dotCounter: 0,
			dots: "",
			zeroResults: 0
		};
	},
	mounted: function() {
		this.dotCycler();
	},
	methods: {
		dotCycler() {
			if (this.dotCounter < 4) {
				this.dotCounter++;

				this.dots += ".";

				setTimeout(this.dotCycler, 1000);
			} else {
				setTimeout(this.dotCycler, 1000);
				this.dots = "";
				this.dotCounter = 0;
			}
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
