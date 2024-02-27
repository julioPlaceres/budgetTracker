<script lang="ts">
	import type { Transaction} from '$lib/types/customTypes';

	export let transaction: Transaction = {
		name: '',
		date: '',
		amount: 0
	}
</script>

<style>
    .transaction {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom: 1px solid #eaeaea;
    }

    .transaction:last-child {
        border-bottom: none;
    }

    .transaction-amount {
        color: #ff3b30; /* Red color for negative amounts */
    }
</style>

<div class="transaction">
	<div>
		<div>{transaction.name}</div>
		<div>{transaction.date}</div>
	</div>
	<div class="transaction-amount">{`-$${transaction.amount}`}</div>
</div>