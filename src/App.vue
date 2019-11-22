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

a{
  text-decoration: none;
}
a {color:black;}         /* Unvisited link  */
a:visited {color:black;} /* Visited link    */
a:hover {color:gray;}   /* Mouse over link */
a:active {color:black;} 

.whole-header{
	background-color: white;
	/* background-color: aqua;*/
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
