<template>
  <div id="todolist">
    <todo-item v-for="(todo) in todos"
      v-bind:key="todo.key"
      v-bind:todo="todo"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name:'TodoList',
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
}
</script>

<style lang="scss">
#todolist {
	flex: 1;
	padding: 20px 32px;
	padding-bottom: 48px;
	overflow-y: auto;
}
</style>