<script>
    import { fade } from 'svelte/transition';
    
    export let isOpen = false;
    
    function closeMenu() {
        isOpen = false;
    }
</script>
  
{#if isOpen}
    <div 
      class="fixed inset-0 bg-sky-950/95 flex flex-col items-center z-50"
      transition:fade
    >
      <button 
        class="absolute top-5 right-5 text-3xl text-white hover:text-yellow-400 transition-colors"
        onclick={closeMenu}
      >
        ×
      </button>
      
      <nav class="flex flex-col items-center justify-center h-full gap-8">
        <a 
          href="/" 
          class="text-white text-2xl hover:text-yellow-400 transition-colors"
          onclick={closeMenu}
        >
          Home
        </a>
        <a 
          href="/foodtruck" 
          class="text-white text-2xl hover:text-yellow-400 transition-colors"
          onclick={closeMenu}
        >
          Our Menu
        </a>
        <a 
          href="/about" 
          class="text-white text-2xl hover:text-yellow-400 transition-colors"
          onclick={closeMenu}
        >
          About Us
        </a>
        <a 
          href="/contact" 
          class="text-white text-2xl hover:text-yellow-400 transition-colors"
          onclick={closeMenu}
        >
          Contact
        </a>
        
        <div class="flex flex-col gap-4 mt-8">
          <a 
            href="https://www.facebook.com/profile.php?id=61567864636675" 
            class="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
            onclick={closeMenu}
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
            </svg>
            Facebook
          </a>
          <a 
            href="https://instagram.com/fusionkitchentruck" 
            class="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
            onclick={closeMenu}
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
      </nav>
  
      <img 
        src="./logo.png" 
        alt="Fusion Kitchen Logo" 
        class="absolute bottom-8 w-40 h-auto"
      />
    </div>
{/if}