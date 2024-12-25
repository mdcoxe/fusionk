<script>
	export let logoUrl;
</script>

<div class="absolute inset-0 w-full h-full flex justify-center">
    <img 
        src={logoUrl} 
        alt="Logo" 
        class="absolute w-auto object-contain 
        max-h-[100px] 
        max-w-[100px]  
        top-[550px] 
        md:top-[725px] 
        md:max-h-[150px] 
        md:max-w-[150px]
        lg:top-[834px]
        lg:max-h-[200px] 
        lg:max-w-[200px]
        xl:top-[927px]
        2xl:top-[927px]
        "
    />
</div>