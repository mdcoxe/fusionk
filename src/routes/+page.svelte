<script>
	import Hero from '$lib/Hero.svelte';
	import ButtonBar from '$lib/ButtonBar.svelte';
	import PictureBar from '$lib/PictureBar.svelte';
	import TextBlock from '$lib/TextBlock.svelte';
</script>

<div class="container mx-auto ">
	<div class="relative p-0 md:p-5 md:-mx-5 bg-[#162C4F] rounded-lg">
		<Hero  imageUrl="./truck_side_crop.JPG" />
	</div>
</div>

<ButtonBar />
<TextBlock />
<PictureBar />