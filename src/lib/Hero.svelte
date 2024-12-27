<script>
	export let imageUrl; 
	import ButtonBar from '$lib/ButtonBar.svelte';
</script>

<div class=" relative ">
	<div class=" min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
		<img
			src={imageUrl}
			alt="Hero Background"
			class="absolute inset-0 w-full h-full 
			md:h-[700px] 
			lg:h-[800px] 
			object-cover
			rounded-lg
			"
		/>
	</div>
</div>
