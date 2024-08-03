<script>
  import Greeting from "$lib/Greeting.svelte";
  import Quote from "$lib/Quote.svelte";
  import Settings from "$lib/Settings.svelte";
  import "./app.css";
  import Time from "./lib/Time.svelte";

  const bgImage =
    "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";
</script>

<main
  class="h-screen w-full bg-zinc-950 max-h-screen text-white"
  style="background-image: url(https://images.unsplash.com/photo-1460551204960-763bc82b7d8f?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);background-size: cover;"
>
  <div class="h-1/6">
    <div class="flex flex-col h-full justify-between">
      <div class="h-12 flex justify-end px-2 py-2">
        <div>
          Photo by <a
            href="https://unsplash.com/@jpease?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            ><b>Jonathan Pease</b></a
          >
          on
          <a
            href="https://unsplash.com/photos/brooklyn-bridge-1nlhZy86uPU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            <b>Unsplash </b>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="h-4/6">
    <div class="h-full flex justify-center items-center">
      <div class="flex flex-col justify-center gap-3">
        <Time />
        <Greeting />
      </div>
    </div>
  </div>
  <div class="h-1/6">
    <div class="flex flex-col-reverse h-full">
      <div class="h-12 flex justify-between px-2 max-h-12">
        <div class="w-fit">
          <Settings />
        </div>
        <div class="w-full">
          <Quote />
        </div>
      </div>
    </div>
  </div>
</main>
