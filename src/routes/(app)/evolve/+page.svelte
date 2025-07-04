<script lang="ts">
  import { user } from '$lib/stores';
  $: username = $user?.name ?? '';
  $: uid = $user?.id ?? '';
  $: tab1Src = `/evolve/tab1.html?name=${encodeURIComponent(username)}&id=${encodeURIComponent(uid)}`;
</script>

<div class="container mx-auto px-3 py-4">
  <iframe src={tab1Src} class="w-100 border-0" style="height:80vh"></iframe>
</div>
