<script>
	export let segment;
	let active = false;
	function openSidebar(event) {
		active = !active;
	}

	$: activeClass = active ? 'active' : 'inactive';
</script>

<div class="wrapper">
	<div id="main">
		<div class="inner">
			<header id="header">
				<a href="/" class="logo">
					<strong>Title</strong>
				</a>
			</header>
		</div>
	</div>
	<div id="sidebar" class={activeClass}>
		<div class="inner">
			<nav id="menu">
				<ul>
					<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
					<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About Us</a></li>

					<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
						the blog data when we hover over the link or tap it on a touchscreen -->
					<li><a rel=prefetch aria-current="{segment === 'articles' ? 'page' : undefined}" href="articles">Articles</a></li>
					<li><a rel=prefetch aria-current="{segment === 'editorials' ? 'page' : undefined}" href="editorials">Editorials</a></li>
				</ul>
			</nav>
		</div>
		<a href="#sidebar" class="toggle" on:click={openSidebar}>
			Toggle
		</a>
	</div>
</div>