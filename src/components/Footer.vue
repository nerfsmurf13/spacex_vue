<template>
	<footer>
		<p>
			Created by
			<a href="http://edwardwilliams.me">Edward Williams</a>!
		</p>
	</footer>
</template>

<script>
export default {
	name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
	width: 50vw;
}
footer {
	text-align: center;
	color: white;
	background-color: #2196f3;
	margin-top: 0.5rem;
	padding: 1rem;
}
footer a {
	color: white;
}
footer a:hover {
	border-bottom: 2px solid white;
	color: white;
}
</style>
