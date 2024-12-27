<script>
	import '../app.css';
	import Header from '$lib/Header.svelte'
	import Footer from '$lib/Footer.svelte'
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen"> 
    <Header />
    <div class="flex-1">
        {@render children()}
    </div>
    <div class="mt-auto">
        <Footer />
    </div>
</div>