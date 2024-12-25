<script>
    const navLinks = [
        { label: 'Events', path: '/events' },
        { label: 'Menu', path: '/foodtruck' },
        { label: 'Catering', path: '/catering' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' }
    ];
</script>

<footer class="bg-[#162C4F] text-white mt-auto py-8">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-[80px_1fr] md:grid-cols-3 gap-8 items-center">
            <!-- Logo -->
            <div class="flex items-center justify-start">
                <img 
                    src="./logo.png" 
                    alt="Fusion Kitchen Logo" 
                    class="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-contain"
                />
            </div>

            <!-- Right side content container -->
            <div class="space-y-8 text-right md:text-center">
                <!-- Quick Links -->
                <div class="md:hidden">
                    <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                    <ul class="space-y-2">
                        {#each navLinks as {label, path}}
                            <li>
                                <a href={path} class="hover:text-[#9D7D59] transition-colors">
                                    {label}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- Company Info -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                    <div class="space-y-2">
                        <p>Fusion Kitchen, LLC</p>
                        <p>
                            <a href="tel:4072125779" class="hover:text-[#9D7D59] transition-colors">
                                407.212.5779
                            </a>
                        </p>
                        <p>
                            <a href="mailto:ChefMike@FusionKitchenLLC.com" class="hover:text-[#9D7D59] transition-colors">
                                ChefMike@FusionKitchenLLC.com
                            </a>
                        </p>
                        <p>Central Florida</p>
                    </div>
                </div>
            </div>

            <!-- Quick Links for lg+ (third column) -->
            <div class="hidden md:block text-right">
                <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    {#each navLinks as {label, path}}
                        <li>
                            <a href={path} class="hover:text-[#9D7D59] transition-colors">
                                {label}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</footer>