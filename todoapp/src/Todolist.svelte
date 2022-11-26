<script>
    import Todotask from "./Todotask.svelte";
    export let Todo = [];
</script>

{#each Todo as td (td.id)}
    <Todotask task={td} on:delete-task />
{/each}
