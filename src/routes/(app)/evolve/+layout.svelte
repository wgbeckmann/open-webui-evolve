<script lang="ts">
  import { getContext } from 'svelte';
  import { WEBUI_NAME, showSidebar } from '$lib/stores';
  import { page } from '$app/stores';
  import MenuLines from '$lib/components/icons/MenuLines.svelte';

  const i18n = getContext('i18n');
</script>

<svelte:head>
  <title>{$i18n.t('Evolve')} • {$WEBUI_NAME}</title>
</svelte:head>

<div class="flex flex-col w-full h-screen max-h-[100dvh] transition-width duration-200 ease-in-out {$showSidebar ? 'md:max-w-[calc(100%-260px)]' : ''} max-w-full">
  <nav class="px-2.5 pt-1 backdrop-blur-xl w-full drag-region">
    <div class="flex items-center">
      <div class="{$showSidebar ? 'md:hidden' : ''} flex flex-none items-center self-end">
        <button
          id="sidebar-toggle-button"
          class="cursor-pointer p-1.5 flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition"
          on:click={() => showSidebar.set(!$showSidebar)}
          aria-label="Toggle Sidebar"
        >
          <div class="m-auto self-center">
            <MenuLines />
          </div>
        </button>
      </div>
      <div class="flex w-full">
        <div class="flex gap-1 scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-full bg-transparent pt-1">
          <a
            href="/evolve"
            class="min-w-fit rounded-full p-1.5 {$page.url.pathname === '/evolve' ? '' : 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'} transition"
            >{$i18n.t('Evolve')}</a
          >
          <a
            href="/evolve/tab2"
            class="min-w-fit rounded-full p-1.5 {$page.url.pathname.includes('/evolve/tab2') ? '' : 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'} transition"
            >Tab 2</a
          >
          <a
            href="/evolve/tab3"
            class="min-w-fit rounded-full p-1.5 {$page.url.pathname.includes('/evolve/tab3') ? '' : 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white'} transition"
            >Tab 3</a
          >
        </div>
      </div>
    </div>
  </nav>
  <div class="flex-1 max-h-full overflow-y-auto">
    <slot />
  </div>
</div>
