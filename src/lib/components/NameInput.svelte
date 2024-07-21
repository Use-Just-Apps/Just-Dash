<script>
  import Button from "./ui/button/button.svelte";
  import Input from "./ui/input/input.svelte";
  import Label from "./ui/label/label.svelte";
</script>

<div>
  <form class="flex flex-col gap-3 items-end">
    <div class="flex flex-col gap-2 text-left w-full">
      <Label class="font-semibold">Enter your name below</Label>
      <Input
        type="name"
        class="bg-background/25 text-white font-bold text-xl"
      />
    </div>
    <Button class="w-fit font-bold bg-background/25" variant="outline"
      >Save Changes</Button
    >
  </form>
</div>
