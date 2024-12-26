<script>
	export let buttons = ["EVENTS", 'MENU', 'CATERING', 'BOOK US'];
</script>

<div class="container mx-auto px-4 py-8">
    <div class="flex flex-col items-center gap-4">
        <!-- Large screens: distributed row -->
        <div class="hidden lg:flex justify-between w-full max-w-6xl">
            <a href="/events" class="w-[200px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[0]}
            </a>
            <a href="/foodtruck" class="w-[200px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[1]}
            </a>
            <a href="/catering" class="w-[200px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[2]}
            </a>
            <a href="/contact" class="w-[200px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[3]}
            </a>
        </div>

        <!-- Medium screens: 2x2 grid -->
        <div class="hidden md:grid lg:hidden grid-cols-2 gap-4">
            <a href="/events" class="w-[200px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[0]}
            </a>
            <a href="/foodtruck" class="w-[200px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[1]}
            </a>
            <a href="/catering" class="w-[200px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[2]}
            </a>
            <a href="/contact" class="w-[200px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[3]}
            </a>
        </div>

        <!-- Small screens: single column -->
        <div class="flex flex-col md:hidden gap-4 justify-center">
            <a href="/events" class="w-[350px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center ">
                {buttons[0]}
            </a>
            <a href="/foodtruck" class="w-[350px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[1]}
            </a>
            <a href="/catering" class="w-[350px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[2]}
            </a>
            <a href="/contact" class="w-[350px] transform rounded-lg bg-[#9D7D59] px-6 py-3 text-lg font-bold text-white shadow-md transition hover:scale-105 hover:bg-[#8B6D49] hover:text-[#162C4F] text-center">
                {buttons[3]}
            </a>
        </div>
    </div>
</div>