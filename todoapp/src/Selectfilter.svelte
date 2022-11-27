<script>
    import Taskform from "./Taskform.svelte";
    import {createEventDispatcher} from 'svelte'

    let selected = 1;

    const dispatch = createEventDispatcher()

    const onChange = (e) => {
        select = (e.currentTarget.value);
        dispatch('filter-select', selected)
    };
</script>

<ul class="rating">
    <li>
        <input
            type="radio"
            id="num1"
            name="filter"
            value="1"
            on:change={onChange}
            checked={selected === 1}
        />
        <label for="num1">All</label>
    </li>
    <li>
        <input
            type="radio"
            id="num2"
            name="filter"
            value="2"
            on:change={onChange}
            checked={selected === 2}
        />
        <label for="num2">Incompleted</label>
    </li>
    <li>
        <input
            type="radio"
            id="num3"
            name="filter"
            value="3"
            on:change={onChange}
            checked={selected === 3}
        />
        <label for="num3">Completed</label>
    </li>
</ul>


<style>
    .rating {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 30px 0;
    }
  
    .rating li {
      position: relative;
      background: #f4f4f4;
      width: 150px;
      height: 50px;
      padding: 10px;
      text-align: center;
      border-radius: 10%;
      font-size: 19px;
      border: 1px #eee solid;
      transition: 0.3s;
    }
  
    .rating li label {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 150px;
      height: 50px;
      padding: 10px;
      border-radius: 10%;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  
    .rating li:hover {
      background: #7D6E83;
      color: #fff;
    }
  
    /* Make actual radio select invisible */
    [type='radio'] {
      opacity: 0;
    }
  
    /* Use the sibling select */
    [type='radio']:checked ~ label {
      background: #7D6E83;
      color: #fff;
    }
  </style>