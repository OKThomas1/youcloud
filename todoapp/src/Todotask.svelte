<script>
    import { createEventDispatcher } from "svelte";
    import Card from "./Card.svelte";
    export let task;

    const dispatch = createEventDispatcher();

    const deleteTask = (taskId) => {
        dispatch("delete-task", taskId);
    };
</script>

<Card>
    <button class="close" on:click={() => deleteTask(task.id)}>X</button>
    <p class="text-display">{task.todo}</p>
</Card>

<style>
    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        background: none;
        border: none;
    }
</style>
