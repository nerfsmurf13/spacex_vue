<template>
	<div id="app">
		<header>
			<app-header />
			<app-navigation></app-navigation>
		</header>
		<!-- <div
			class="message-to-viewer"
		>I started this project in mid November 2019 and although not complete, I am still using this as a portfolio item! Pardon the construction!</div> -->
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
<style src="./styles/style.css"></style>