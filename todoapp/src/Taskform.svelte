<script>
    import Card from "./Card.svelte";
    import Button from "./Button.svelte";
    import Selectfilter from "./Selectfilter.svelte";
    import SelectFilter from "./Selectfilter.svelte";

    let filter = 1;
    let text = "";
    let btnDisabled = true;
    let message;

    const handleInput = () => {
        if (text.trim().length < 5) {
            message = `Text must be at least 5 characters`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false;
        }
    };
</script>

<Card>
    <header>
        <h2>What do you need to get done today?</h2>
    </header>
    <form>
        <SelectFilter on:filter-select />
        <div class="input-group">
            <input
                type="text"
                on:input={handleInput}
                bind:value={text}
                placeholder=""
            />
            <Button disabled={btnDisabled} type="submit">Send</Button>
        </div>

        {#if message}
            <div class="message">
                {message}
            </div>
        {/if}
    </form>
</Card>

<style>
    header {
        max-width: 400px;
        margin: auto;
    }

    header h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: center;
    }

    .input-group {
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }

    input {
        flex-grow: 2;
        border: none;
        font-size: 16px;
    }

    input:focus {
        outline: none;
    }

    .message {
        padding-top: 10px;
        text-align: center;
        color: red;
    }
</style>
