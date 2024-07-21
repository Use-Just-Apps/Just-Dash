<script>
  import { onMount } from "svelte";
  import { name } from "./stores";
  import NameInput from "./components/NameInput.svelte";

  onMount(() => {
    console.log($name);
  });
</script>

<div class="text-center text-white text-5xl font-semibold h-fit w-full">
  {#if $name !== null}
    <h1>Hello, {$name}!</h1>
  {:else}
    <NameInput />
  {/if}
</div>
