export type Transaction = {
	name: string;
	date: string;
	amount: number;
}

export type Bill = {
	name: string;
	amount: number;
	date: string;
	frequency: string;
	type: string;
}