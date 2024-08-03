<script>
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Select from "$lib/components/ui/select";
  import { Gear } from "svelte-radix";
  import { timeFormat } from "./stores";

  function setTimeFormat(format) {
    timeFormat.set(format);
  }
</script>

<Dialog.Root>
  <Dialog.Trigger>
    <Button variant="outline" size="icon" class="text-white hove">
      <Gear />
    </Button>
  </Dialog.Trigger>
  <Dialog.Content class="w-fit bg-zinc-950 text-white">
    <Dialog.Header>
      <Dialog.Title>Settings</Dialog.Title>
      <Dialog.Description>
        Make changes to your settings here.
      </Dialog.Description>
    </Dialog.Header>
    <Tabs.Root value="settings" class="w-full">
      <Tabs.List class="grid w-full grid-cols-1 bg-zinc-900">
        <Tabs.Trigger value="settings" class="bg-zinc-900">
          Settings
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="settings">
        <Card.Root class="bg-zinc-950 text-white">
          <Card.Content class="space-y-2 py-1 h-fit">
            <div class="space-y-1 pb-2">
              <Label for="name">Time Format</Label>
              <Select.Root
                selected={{
                  value: $timeFormat,
                  label:
                    $timeFormat === "twentyfour"
                      ? "24 Hour"
                      : "12 Hour (AM/PM)",
                }}
                onSelectedChange={(v) => {
                  setTimeFormat(v.value);
                }}
              >
                <Select.Trigger class="w-full">
                  <Select.Value
                    placeholder="Select your preferred time format"
                  />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="twentyfour">24 Hour</Select.Item>
                  <Select.Item value="twelvehour">12 Hour (AM/PM)</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>
          </Card.Content>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  </Dialog.Content>
</Dialog.Root>
