<script>
    import { createEventDispatcher } from "svelte";
    import Card from "./Card.svelte";
    export let task;

    const dispatch = createEventDispatcher();

    const deleteTask = (taskId) => {
        dispatch("delete-task", taskId);
    };

    const updateCompleted = (taskId, taskCompleted) => {
        dispatch("update-completed", [taskId, taskCompleted]);
    }
</script>

<Card>
    <button class="close" on:click={() => deleteTask(task.id)}>X</button>
    <p class="text-display">{task.todo}</p>
    <input class="checkbox" type="checkbox" bind:checked={task.completed} on:change={() => updateCompleted(task.completed, task.id)} />
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

    .checkbox {
        position: absolute;
        top: 50px;
        right: 17px;
        cursor: pointer;
        background: none;
        border: none;
    }
</style>
