<template>
	<div class="navbar">
		<ul>
			<li>
				<router-link to="/capsules">History</router-link>
			</li>
			<li>
				<router-link to="/launches">Launches</router-link>
			</li>
			<li>
				<router-link to="/rockets">Missions</router-link>
			</li>
			<li>
				<router-link to="/rockets">Rockets</router-link>
			</li>
			<li>
				<router-link to="/rockets">Launch Pads</router-link>
			</li>
			<li>
				<router-link to="/rockets">Landing Pads</router-link>
			</li>
			<li>
				<router-link to="/rockets">Ships</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Navigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
	display: flex;
	justify-content: space-evenly;
}

.navbar li {
}
</style>
