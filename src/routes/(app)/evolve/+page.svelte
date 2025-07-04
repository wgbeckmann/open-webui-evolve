<script lang="ts">
  let active = 'tab1';
</script>

<div class="container mx-auto px-3 py-4">
  <ul class="nav nav-tabs mb-4">
    <li class="nav-item">
      <a href="#" class="nav-link {active === 'tab1' ? 'active' : ''}" on:click|preventDefault={() => active='tab1'}>Tab 1</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link {active === 'tab2' ? 'active' : ''}" on:click|preventDefault={() => active='tab2'}>Tab 2</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link {active === 'tab3' ? 'active' : ''}" on:click|preventDefault={() => active='tab3'}>Tab 3</a>
    </li>
  </ul>
  {#if active === 'tab1'}
    <iframe src="/evolve/tab1.html" class="w-100 border-0" style="height:80vh"></iframe>
  {:else if active === 'tab2'}
    <iframe src="/evolve/tab2.html" class="w-100 border-0" style="height:80vh"></iframe>
  {:else}
    <iframe src="/evolve/tab3.html" class="w-100 border-0" style="height:80vh"></iframe>
  {/if}
</div>
