<template>
	<div>
		<div class="page-not-found">
			<p class="notfound">404!</p>
			<p>Sorry! This page cannot be found!</p>
			<p>If you reached this screen from the navigation menu, the page is probably under construction!</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Page404"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notfound {
	font-size: 6rem;
}

.page-not-found {
	display: flex;
	flex-flow: column;
	padding: 10%;
	align-items: center;
}

h1,
h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
