<script lang="ts">
	import Transaction_card from '$lib/cards/transaction_card.svelte';
	import type { Transaction } from '$lib/types/customTypes';

	let transactions: Transaction[] = [
		{ name: 'Walgreens Store', date: '02/23', amount: 65.27 },
		{ name: 'COSTCO GAS', date: '02/21', amount: 30.01 }
	];

	let details = {
		currentBalance: '$436.99',
		billsToPay: '$232.12',
		yoursToSpend: '$204.87'
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

    .add-bills-btn {
        display: inline-block;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        background-color: #007bff; /* Bootstrap primary color */
        color: white;
        text-align: center;
        border-radius: 20px;
        text-decoration: none; /* Remove underline from anchor tag */
        cursor: pointer;
    }
</style>

<div class="container">
	<div class="details-container">
		<div class="header">
			<h3>Details</h3>
		</div>
		
		<div class="details">
			<div class="details-item">
				<span>Current balance</span>
				<span>{details.currentBalance}</span>
			</div>
			<div class="details-item">
				<span>Bills to pay</span>
				<span>{details.billsToPay}</span>
			</div>
			<div class="details-item">
				<span>Yours to spend</span>
				<span>{details.yoursToSpend}</span>
			</div>
		</div>
	</div>
	
	<a class="add-bills-btn" href="/bills">Add bills ★</a>
	
	
	{#each transactions as transaction}
		<Transaction_card {transaction} />
	{/each}
</div>
