const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: "",
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
                {
                    text: 'zzzzzzzzzzzzz',
                    done: false
                },
            ]
        }
    },
    methods: {
        addTask() {
            this.todos.unshift({
                text: this.newTask,
                done: false
            });
            this.newTask = "";
        },
        doneTask(index) {
            this.todos[index].done = !this.todos[index].done;
        }
    }
}).mount("#app");
