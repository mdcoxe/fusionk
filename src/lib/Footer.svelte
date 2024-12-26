<script>
	const navLinks = [
		{ label: 'Events', path: '/events' },
		{ label: 'Menu', path: '/foodtruck' },
		{ label: 'Catering', path: '/catering' },
		{ label: 'About', path: '/about' },
		{ label: 'Contact', path: '/contact' }
	];
</script>

<footer class="mt-auto bg-[#162C4F] py-8 text-white">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-[100px_1fr] items-center gap-8 md:grid-cols-3">
			<!-- Logo -->
			<div class="flex items-center justify-start">
				<img
					src="./logo.png"
					alt="Fusion Kitchen Logo"
					class="h-[125px] w-[125px] object-contain md:h-[200px] md:w-[200px]"
				/>
            </div>
            
			<!-- Right side content container -->
			<div class="space-y-8 text-right md:text-center">
				<!-- Quick Links -->
				<div class="md:hidden">
					<h3 class="mb-4 text-xl font-bold">Quick Links</h3>
					<ul class="space-y-2">
						{#each navLinks as { label, path }}
							<li>
								<a href={path} class="transition-colors hover:text-[#9D7D59]">
									{label}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Company Info -->
				<div>
					<h3 class="mb-4 text-xl font-bold">Contact Us</h3>
					<div class="space-y-2">
						<p>Fusion Kitchen, LLC</p>
						<p>
							<a href="tel:4072125779" class="transition-colors hover:text-[#9D7D59]">
								407.212.5779
							</a>
						</p>
						<p>Central Florida</p>
						<p>
							<a
								href="mailto:ChefMike@FusionKitchenLLC.com"
								class="transition-colors hover:text-[#9D7D59]"
							>
								ChefMike@FusionKitchenLLC.com
							</a>
						</p>
					</div>
				</div>
			</div>

			<!-- Quick Links for lg+ (third column) -->
			<div class="hidden text-right md:block">
				<h3 class="mb-4 text-xl font-bold">Quick Links</h3>
				<ul class="space-y-2">
					{#each navLinks as { label, path }}
						<li>
							<a href={path} class="transition-colors hover:text-[#9D7D59]">
								{label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</footer>
