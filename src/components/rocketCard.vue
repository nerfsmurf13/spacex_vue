<template>
	<div class="rocket-card" v-bind:style="{ backgroundImage: 'url(' + picture + ')' }" >
		<div class="rocket-middle" >{{name}}</div>
	</div>
</template>
<script>
export default {
	name: "RocketCard",
	props: {
		name: {
			type: String,
			default: ""
		},
		picture: {
			type: String,
			default: ""
		},
		first_flight: {
			type: String,
			default: ""
		}
		//rocketId: String
	}
};
</script>
<style src="../styles/style.css">

</style>
