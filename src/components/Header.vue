<template>
	<header>
		<div class="spacex-logo">
			<img src="../assets/spacex_logo_small.png" />
		</div>
		<div class="header-sub-heading">
			<p>The Unofficial SpaceX Database</p>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header .spacex-logo,
.header-sub-heading {
	display: flex;
	justify-content: center;
}
img {
	height: 30px;
}
</style>
