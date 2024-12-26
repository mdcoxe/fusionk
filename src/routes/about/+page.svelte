<script>
    const imagePath = "./family.jpg"; 
</script>

<div class="container mx-auto px-4 sm:px-8 lg:px-16 py-12 mt-[100px] mb-[25px] rounded-lg bg-[#162C4F]">
    <div class="flex flex-col md:flex-row gap-8">
        <!-- Image for md and below - shows at top -->
        <div class="md:hidden h-[100%] mx-auto">
            <img 
                src={imagePath} 
                alt="The Trudnak Family" 
                class="w-full h-[300px] object-cover rounded-lg"
            />
        </div>

        <!-- Text Content -->
        <div class="flex-1 text-white space-y-8 mx-[5px]">
            <h1 class="text-3xl font-bold">About Us</h1>
            
            <p>
                At Fusion Kitchen LLC, we bring over 20 years of passion and expertise in culinary arts and hospitality straight to your plate. As a family-owned and operated business, we proudly serve Central Florida with top-notch catering, mobile kitchen, and food truck services. Whether it's an intimate gathering or a large celebration, we're here to make your dining experience unforgettable.
            </p>

            <p>
                Our journey is a blend of creativity and sustainability. Led by Chef Mike Trudnak, who has nearly two decades of experience in diverse cuisines and culinary techniques, Fusion Kitchen is more than just a business—it's a passion project. Chef Mike and his wife created Fusion Kitchen to share their love for scratch-made, flavorful food while staying committed to eco-friendly practices, using compostable and recyclable serving ware.
            </p>

            <p>
                We offer an ever-evolving, seasonal menu that celebrates innovation and quality. Our mission is simple: to serve incredible food fast—not fast food—at reasonable prices, with generous portions and unbeatable value.
            </p>

            <p>
                Whether you're visiting our food truck or planning a custom catering event, we adapt to your needs with personalized menus and exceptional service. From drop-off catering and buffets to plated dinners and holiday celebrations, we're fully licensed, insured, and ready to create a culinary experience tailored just for you.
            </p>

            <p>
                Let's turn your event into a delicious success. Join us on this exciting journey as we continue to share our love of food and hospitality with Central Florida and beyond.
            </p>

            <p class="text-[#9D7D59] font-bold">
                Follow us at @fusionkitchentruck to see where we'll be next!
            </p>
        </div>

        <!-- Image for larger screens - shows on right -->
        <div class="hidden md:block w-1/3">
            <img 
                src={imagePath} 
                alt="The Trudnak Family" 
                class="w-full  object-cover rounded-3xl sticky top-20"
            />
        </div>
    </div>
</div>