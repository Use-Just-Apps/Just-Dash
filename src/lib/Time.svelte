<script>
  import { onMount } from "svelte";
  import { readonly, writable } from "svelte/store";
  import { DateTime } from "luxon";
  import { timeFormat } from "./stores";

  const time = writable(new String());
  const curentTimeMode = writable();

  const timeModes = {
    twelvehour: DateTime.TIME_SIMPLE,
    twentyfour: DateTime.TIME_24_SIMPLE,
  };

  const timeMode = readonly(timeFormat);
  timeMode.subscribe((val) => {
    if (val === "twentyfour") {
      curentTimeMode.set(timeModes.twentyfour);
    }
    if (val === "twelvehour") {
      curentTimeMode.set(timeModes.twelvehour);
    }
  });

  onMount(() => {
    const interval = setInterval(() => {
      let currentTime = DateTime.now();
      time.set(currentTime.toLocaleString($curentTimeMode));
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<div class="text-center text-white text-9xl font-semibold h-fit w-full">
  {#if $time}{$time}{/if}
</div>
