<script>
    export let Todo = [];
</script>

{#each Todo as td (td.id)}
    <h1>{td.todo}</h1>
{/each}
