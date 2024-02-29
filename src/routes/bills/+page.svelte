<script lang="ts">
	let bills = [
		{ name: 'Rent', frequency: 'Monthly', type: 'House', amount: 400, date: '03/01' }
	];

	let newBill = {
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
        border-bottom: 2px solid #eaeaea;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }

    .details-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
</style>

<div class="container">
	<div class="details-container">
		<div class="header">
			<h1>Bills</h1>
		</div>
		
		<div class="details">
			<input type="text" bind:value={newBill.name} placeholder="Name" />
			<input type="number" bind:value={newBill.amount} placeholder="Amount" />
			<select bind:value={newBill.frequency}>
				<option value="" disabled selected>Frequency</option>
				<option value="Monthly">Monthly</option>
				<option value="Yearly">Yearly</option>
			</select>
			<select bind:value={newBill.type}>
				<option value="" disabled selected>Type</option>
				<option value="House">House</option>
				<option value="Utility">Utility</option>
			</select>
		</div>
	</div>
	
	<button on:click={addBill}>+</button>
	
	<div class="bill-list">
		{#each bills as bill, index}
			<div class="bill-item">
				<div class="">
					<h2>{bill.name}</h2>
					<p>{bill.frequency}</p>
					<p>{bill.type}</p>
				</div>
				<div class="details-item">
					<span>{bill.date}</span>
					<span>${bill.amount}</span>
					<button on:click={() => removeBill(index)}>-</button>
				</div>
			</div>
		{/each}
	</div>
</div>
