<script>
    export let Todo = [];
</script>

{#each Todo as todo (todo.id)}
    <h1>{todo.text}</h1>
{/each}
