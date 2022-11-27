<script>
    import { fade, scale } from "svelte/transition";
    import Todotask from "./Todotask.svelte";
    export let Todo = [];
</script>

{#each Todo as td (td.id)}
    <Todotask task={td} on:delete-task on:update-completed />
{/each}
