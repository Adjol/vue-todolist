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
                    done: false,
                   
                },
            ]
        }
    },

    methods: {
// inserisco nuove voci in lista
        addTask() {
            this.todos.unshift({
                text: this.newTask,
                done: false
            });
            this.newTask = "";
        },
        
//inverte stato done in ciascun object
        doneTask(index) {
            this.todos[index].done = true;
        },
//rimuove una voce dal elenco con 'x'

        removeTask(index) {
            this.todos.splice(index, 1);
        },
    }
}).mount("#app");

