<template>
	<div id="app">
		<div class="whole-header">
			<app-header />
			<app-navigation></app-navigation>
		</div>
		<div class="container">
			<router-view />
		</div>

		<app-footer />
	</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default {
	name: "App",
	components: {
		"app-header": Header,
		"app-footer": Footer,
		"app-navigation": Navigation
	}
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
}
body {
	font-family: "Montserrat", sans-serif;
}
.container {
	background-color: #eee;
}
ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
</style>
