import { Ref } from "@vue/runtime-dom";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
	state: () => {
		const tasks: Object[] = [
			{ text: "Do the dishes", done: false },
			{ text: "Code", done: true },
		];

		return { tasks };
	},
	actions: {
		addTaskInStore(text: string, done: boolean): void {
			this.tasks.push({ text: text, done: done });
		},

		deleteTaskFromStore(taskIndex: number) {
			this.tasks.splice(taskIndex, 1);
		},
		changeTaskStatus(taskIndex: number) {
			this.tasks[taskIndex].done = !this.tasks[taskIndex].done;
		},
		changeTaskText(newText: string, taskIndex: number) {
			this.tasks[taskIndex].text = newText.trim();
		}
	},
	getters: {
		getTasksTodo() {
			return this.tasks.filter((task) => !task.done);
		},
		getDoneTasks() {
			return this.tasks.filter((task) => task.done);
		},
	},
});
