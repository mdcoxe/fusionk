<script>
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabase/client';

  let menu = null; 

  const fetchMenuImage = async () => {
    const { data, error } = supabase.storage.from('menu-files').getPublicUrl('menu.png');

    if (error) {
      console.error('Error fetching menu image:', error);
    } else {
      menu = { url: data.publicUrl }; 
    }
  };

  onMount(() => {
    fetchMenuImage();
  });
</script>

<div class="flex items-center justify-center px-5">
  <div class="bg-[#162C4F] rounded-lg p-5 mt-[100px] mb-[25px]">
    {#if menu}
      <img
        src={menu.url}
        alt="Food Truck Menu"
        class="w-[100%] h-auto rounded-lg max-w-none md:w-[100%] md:max-w-screen-lg"
      />
    {:else}
      <p class="text-white">Loading menu...</p>
    {/if}
  </div>
</div>
