<script>
    import { fade, scale } from "svelte/transition";
    import Todotask from "./Todotask.svelte";
    export let Todo = [];
</script>

{#each Todo as td (td.id)}
    <div in:scale out:fade={{ duration: 500 }}>
        <Todotask task={td} on:delete-task />
    </div>
{/each}
