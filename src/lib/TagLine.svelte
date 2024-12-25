<script>
	export let logoUrl;
</script>

<div class="font-sofia z-10 items-center justify-center flex w-full ">

	<div class="flex flex-grow items-center justify-evenly text-3xl  text-white h-[60px] bg-[#162C4F]">
		<div>Burgers</div>
		<div>|</div>
		<div>Hangry</div>
		<div class="relative flex items-center justify-center rounded-full bg-gray-200 p-2">
			<img src={logoUrl} alt="Logo" class="max-h-[200px] max-w-[200px] flex-shrink-0" />
		</div>		
		<div>Nachos</div>
		<div>|</div>
		<div>Meat</div>
	</div>
</div>
