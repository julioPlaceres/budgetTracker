<script lang="ts">
	import Bill_card from '$lib/cards/bill_card.svelte';
	import type { Bill } from '$lib/types/customTypes'
	
	let bills: Bill[] = [
		{ name: 'Rent', frequency: 'Monthly', type: 'House', amount: 400, date: '03/01' },
		{ name: 'Water', frequency: 'Monthly', type: 'House', amount: 23, date: '03/02' }
	];

	let newBill: Bill = {
		name: '',
		amount: 0,
		frequency: '',
		type: ''
	};

	const addBill = () => {
		bills = [...bills, { ...newBill, date: new Date().toLocaleDateString() }];
		newBill = { name: '', amount: 0, frequency: '', type: '' }; // Reset the form
	};

	const removeBill = (index: number) => {
		bills.splice(index, 1);
		bills = [...bills]; // Trigger reactivity
	};
</script>

<style>
    .details-container {
        font-family: 'Roboto', sans-serif;
        max-width: 600px; /* Adjust the max-width as needed */
        margin: auto;
        padding: 1rem;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .header {
        text-align: start;
        margin-bottom: 2rem;
    }

    .details {
				align-content: center;
        border-bottom: 2px solid #eaeaea;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }

    .details-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }

    .details-item-card {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }

    .add-bills-btn {
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        background-color: #007bff;
        color: white;
        text-align: center;
        border-radius: 20px;
    }
</style>

<div class="container">
	<div class="details-container">
		<div class="header">
			<h1>Bills</h1>
		</div>
		
		<div class="details">
			<input class="details-item" type="text" bind:value={newBill.name} placeholder="Name" />
			<input class="details-item" type="number" bind:value={newBill.amount} placeholder="Amount" />
			<select class="details-item" bind:value={newBill.frequency}>
				<option value="" disabled selected>Frequency</option>
				<option value="Monthly">Monthly</option>
				<option value="Yearly">Yearly</option>
			</select>
			<select class="details-item-card" bind:value={newBill.type}>
				<option value="" disabled selected>Type</option>
				<option value="House">House</option>
				<option value="Utility">Utility</option>
			</select>
			<button class="add-bills-btn" on:click={addBill}>+</button>
		</div>
	</div>
	
		{#each bills as bill, index}
			<Bill_card removeBill={() => {removeBill(index)}} {bill}/>
		{/each}
</div>
