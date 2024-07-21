<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const quote = writable("");

  onMount(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        quote.set(`"${data.quote}" - ${data.author}`);
      })
      .catch((error) => {
        console.error("Error fetching the quote:", error);
      });
  });
</script>

<div class="text-center text-white text-lg font-medium italic">
  {$quote}
</div>
