<template>
  <div id="main">
    <todo-head/>
    <todo-list/>
    <todo-create/>
  </div>
</template>

<script>
import TodoCreate from './components/TodoCreate.vue'
import TodoHead from './components/TodoHead.vue'
import TodoList from './components/TodoList.vue'
export default {
  components: { TodoHead, TodoList, TodoCreate },
  name: 'app'
};
</script>

<style lang="scss">
body {
  background: #e9ecef;
}
#main {
  width: 512px;
	height: 768px;

	position: relative;
	background: white;
	border-radius: 16px;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

	margin: 0 auto;

	margin-top: 96px;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
}
</style>
