<script lang="ts">
import PrimaryButton from "$lib/components/ui/PrimaryButton.svelte";
import SecondaryButton from "$lib/components/ui/SecondaryButton.svelte";

export let title: string;
export let message: string;
export let onConfirm: () => void;
export let onCancel: () => void;
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
  <div class="bg-stone-800 text-white p-6 rounded-lg shadow-lg border border-stone-600 w-full max-w-md">
    <h3 class="text-xl font-bold mb-4">{title}</h3>
    <p class="mb-6">{message}</p>
    <div class="flex justify-end space-x-4">
      <SecondaryButton
        onClick={onCancel}
      >
        Cancel
      </SecondaryButton>
      <PrimaryButton onClick={onConfirm} text="Confirm" />
    </div>
  </div>
</div>
