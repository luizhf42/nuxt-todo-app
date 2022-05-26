import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
	state: () => {
		const tasks = [
			{ text: "Do the dishes", done: false },
			{ text: "Code", done: true },
		];
		return { tasks };
	},
	actions: {
		add(text) {
			this.tasks.push({ text: text, done: false });
		},
	},
});
