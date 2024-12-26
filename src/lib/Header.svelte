<script>
	import Menu from './Menu.svelte';
	const navItems = [
		{ label: 'Events', path: '/events' },
		{ label: 'Menu', path: '/foodtruck' },
		{ label: 'Catering', path: '/catering' },
		{ label: 'About', path: '/about' },
		{ label: 'Contact', path: '/contact' }
	];

	let props = $props();
	let isMenuOpen = $state(false);
</script>

<header class="font-sofia fixed left-0 right-0 top-0 z-50 bg-white shadow-md text-[#162C4F]">
	<div class="container mx-auto px-2">
		<nav class="flex h-16 items-center justify-between">

			<!-- Hamburger Menu -->
			<button class="lg:hidden order-1 text-[#162C4F] text-3xl" onclick={() => isMenuOpen = true}>
				☰
			</button>

			<!-- Logo -->
			<a href="/" class="title text-3xl font-bold order-2 lg:order-1">FUSION KITCHEN, LLC</a>

			<!-- Navigation Links -->
			<div class="hidden lg:flex justify-center space-x-6 order-2">
				{#each navItems as { label, path }}
					<a href={path} class="text-2xl  transition-colors hover:text-[#9D7D59]">
						{label}
					</a>
				{/each}
			</div>

			<!-- Phone Button -->
			<a
				href="tel:4072125779"
				class="rounded-full bg-[#9D7D59] px-4 py-1 text-2xl  transition-colors hover:bg-[#8B6D49] hover:text-[#162C4F] order-3"
			>
				407.212.5779
			</a>
		</nav>
	</div>
</header>

<Menu bind:isOpen={isMenuOpen} />
