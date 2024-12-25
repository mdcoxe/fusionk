<script>
    import { onMount } from 'svelte';
  
    let menu = null;
  
    onMount(async () => {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';
      const res = await fetch(`${apiUrl}/api/menus?populate=*`);
      const data = await res.json();
      if (data?.data?.length > 0) {
        menu = data.data[0].menu_pdf; 
      }
    });
  </script>

<div class="flex items-center justify-center  px-5 ">
  <div class="bg-[#162C4F] rounded-lg p-5 mt-[100px] mb-[25px]">
    {#if menu}
      <img
        src={`http://localhost:1337${menu.url}`}
        alt="Food Truck Menu"
        class="w-[100%] h-auto rounded-lg max-w-none md:w-[100%] md:max-w-screen-lg"
      />
    {:else}
      <p class="text-white">Loading menu...</p>
    {/if}
  </div>
</div>

