<template>
	<div class="launch-card">
		<div class="content">
			<span class="name">Loading{{ dots }}</span>
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
<style src="../styles/style.css">
</style>
