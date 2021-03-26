<script>
	import Nav from '../../components/BaseComponents/Nav.svelte';
	
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<div id="wrapper">
	<div id="main">
		<div class="inner">
			<header id="header">
				<a href="/" class="logo">
					<strong>The Link</strong>
				</a>
			</header>
			<slot></slot>
		</div>
	</div>
	<Nav {segment}/>
</div>