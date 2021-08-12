<template>
	<div id="todo-item-block">
		<div id="check-circle"
			v-bind:style="[todo.done && {'border': '1px solid #38d9a9', 'color': '#38d9a9'}]"
			@click="onToggle"
		>
			<font-awsome-icon icon="check" v-if="todo.done"/>
		</div>
		<div id="text" v-bind:done="todo.done">
			{{todo.text}}
		</div>
		<div id="remove" @click="onRemove">
			<font-awsome-icon icon="trash"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TodoItem',
		props: ['todo'],
		methods: {
			onToggle() {
     			this.$store.dispatch('onToggle', this.todo);
    		},
			onRemove() {
     			this.$store.dispatch('onRemove', this.todo);
    		}
		}
	};
</script>

<style lang="scss">
#remove {
	display: flex;
	align-items: center;
	justify-content: center;
	color: #dee2e6;
	font-size: 24px;
	cursor: pointer;
	&:hover {
		color: #ff6b6b;
	}
	display: none;
}

#todo-item-block {
	display: flex;
	align-items: center;
	padding-top: 12px;
	padding-bottom: 12px;
	&:hover {
		#remove {
			display: initial;
		}
	}
}

#check-circle {
	width: 32px;
	height: 32px;
	border-radius: 16px;
	border: 1px solid #ced4da;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
}

#text {
	flex: 1;
	font-size: 21px;
	color: #495057;
}
</style>