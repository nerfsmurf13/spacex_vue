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

.row {
	display: flex;
	flex-flow: row;
}

.sidebar {
	/* border: 1px black solid; */
	width: 300px;
	padding: 1rem;
	background-color: #f4f4f4;
}
.sidebar .category {
}

.navbar {
	padding: 1rem;
	font-size: 1.2rem;
}

a {
	text-decoration: none;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
a {
	color: black;
} /* Unvisited link  */
a:visited {
	color: black;
} /* Visited link    */
a:hover {
	color: gray;
} /* Mouse over link */
a:active {
	color: black;
}

.whole-header {
	background-color: white;
	/* background-color: aqua;*/
}

fieldset {
	border: 0;
}

body {
	font-family: "Montserrat", sans-serif;
}
.container {
	background-color: #f4f4f4;
}
ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}
</style>
