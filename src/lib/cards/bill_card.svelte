<script lang="ts">
	import type { Bill} from '$lib/types/customTypes';
	
	export let bill: Bill = {
		name: '',
		date: '',
		amount: 0,
		frequency: '',
		type: ''
	}

	export let removeBill: (index: number) => void;
</script>

<style>
    .bill {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom: 1px solid #eaeaea;
    }

    .bill:last-child {
        border-bottom: none;
    }

    .add-bills-btn {
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        background-color: #ff0000;
        color: white;
        text-align: center;
        border-radius: 20px;
    }
</style>

<div class="bill">
	<div>
		<div>{bill.name}</div>
		<div>{bill.frequency}</div>
		<div>{bill.type}</div>
		<div>{bill.date}</div>
	</div>
	<div>{`-$${bill.amount}`}</div>
	<button class="add-bills-btn" on:click={removeBill}>-</button>
</div>