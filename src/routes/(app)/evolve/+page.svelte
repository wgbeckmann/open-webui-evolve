<script lang="ts">
  import { user, evolveActiveTab } from '$lib/stores';
  $: username = $user?.name ?? '';
  $: uid = $user?.id ?? '';
  $: tab1Src = `/evolve/tab1.html?name=${encodeURIComponent(username)}&id=${encodeURIComponent(uid)}`;
</script>

<div class="container mx-auto px-3 py-4">
  {#if $evolveActiveTab === 'tab1'}
    <iframe src={tab1Src} class="w-100 border-0" style="height:80vh"></iframe>
  {:else if $evolveActiveTab === 'tab2'}
    <iframe src="/evolve/tab2.html" class="w-100 border-0" style="height:80vh"></iframe>
  {:else}
    <iframe src="/evolve/tab3.html" class="w-100 border-0" style="height:80vh"></iframe>
  {/if}
</div>
