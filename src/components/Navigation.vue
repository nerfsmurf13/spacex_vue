<template>
	<nav class="navbar">
		<ul>
			<li @click="currentPage" :class="{ 'active': page==('/history')}">
				<router-link to="/history">History</router-link>
			</li>
			<li @click="currentPage" :class="{ 'active': page==('/launches')}">
				<router-link @click="currentPage" to="/launches">Launches</router-link>
			</li>
			<li @click="currentPage" :class="{ 'active': page==('/missions')}">
				<router-link @click="currentPage" to="/missions">Missions</router-link>
			</li>
			<li @click="currentPage" :class="{ 'active': page==('/rockets')}">
				<router-link @click="currentPage" to="/rockets">Rockets</router-link>
			</li>
		
			<li @click="currentPage" :class="{ 'active': page==('/launch-pads')}">
				<router-link @click="currentPage" to="/launch-pads">Launch Pads</router-link>
			</li>
			<li @click="currentPage" :class="{ 'active': page==('/landing-pads')}">
				<router-link @click="currentPage" to="/landing-pads">Landing Pads</router-link>
			</li>
			<li @click="currentPage" :class="{ 'active': page==('/ships')}">
				<router-link @click="currentPage" to="/ships">Ships</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "Navigation",
	data() {
		return {
			page: ""
		};
	},
	mounted: function() {
		this.currentPage();
	},
	methods: {
		currentPage() {
			this.page = this.$route.path;
			return this.$route.path;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/style.css"></style>
