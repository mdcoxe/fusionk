<script>
    const images = [
        {
            src: '/beans.jpg',
            alt: 'Catering Image 1',
            description: 'Description for image 1'
        },
        {
            src: '/broc.jpg',
            alt: 'Catering Image 2',
            description: 'Description for image 2'
        },
        {
            src: '/fish.jpg',
            alt: 'Catering Image 3',
            description: 'Description for image 3'
        },
        {
            src: '/notchos.jpg',
            alt: 'Catering Image 4',
            description: 'Description for image 4'
        },
        {
            src: '/porksammich.jpg',
            alt: 'Catering Image 5',
            description: 'Description for image 5'
        }
    ];

    let selectedIndex = $state(0);

    function selectImage(index) {
        selectedIndex = index;
    }
</script>

<div class="container mx-auto px-4 py-8">
    
    <div class="max-w-4xl mx-auto mt-12">
        <h2 class="text-3xl font-bold mb-4">Our Catering Services</h2>
        <p class="text-lg mb-6">
            Let us cater your next event! We offer a variety of options to suit your needs.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
            <div>
                <h3 class="text-2xl font-semibold mb-3">Private Events</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Weddings</li>
                    <li>Birthday Parties</li>
                    <li>Family Gatherings</li>
                    <li>Special Occasions</li>
                </ul>
            </div>

            <div>
                <h3 class="text-2xl font-semibold mb-3">Corporate Events</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Office Parties</li>
                    <li>Business Meetings</li>
                    <li>Conferences</li>
                    <li>Team Building Events</li>
                </ul>
            </div>
        </div>

        <div class="mt-8">
            <h3 class="text-2xl font-semibold mb-3">Contact Us</h3>
            <p class="text-lg mb-4">
                Ready to discuss your event? Contact us for a custom quote!
            </p>
            <!-- <a href="/contact" class="w-[350px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center"> -->

            <a 
                href="/contact" 
                class="inline-block bg-[#162C4F] text-white text-lg font-bold py-2 px-6 rounded-lg hover:bg-[#1d3e72] hover:text-[#8B6D49] transform shadow-md  transition hover:scale-105"
            >
                Get in Touch
            </a>
        </div>
    </div>


    <div class="bg-[#162C4F] mt-[75px] p-5 rounded-lg max-w-4xl mx-auto">
    
        <!-- Main Image -->
        <div class="relative w-full h-[650px] mb-4">
            <img 
                src={images[selectedIndex].src} 
                alt={images[selectedIndex].alt}
                class="w-full h-full object-cover rounded-lg shadow-lg transition-opacity duration-300"
            />
        </div>

        <!-- Description -->
        <p class="text-lg mb-4 text-white">
            {images[selectedIndex].description}
        </p>

        <!-- Thumbnail Grid -->
        <div class="grid grid-cols-4 gap-4">
            {#each images as image, i}
                {#if i !== selectedIndex}
                    <button 
                        class="relative aspect-[16/9] overflow-hidden rounded-lg shadow-md hover:opacity-80 transition-opacity duration-200"
                        onclick={() => selectImage(i)}
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt}
                            class="w-full h-full object-cover"
                        />
                    </button>
                {/if}
            {/each}
        </div>
    </div>

</div>