<template>
	<div>
		<div id="insert-form-positioner" v-if="open">
			<form id="insert-form" v-on:submit="onSubmit">
				<input
					autoFocus
					type="text"
					placeholder="할 일을 입력 후, Enter 를 누르세요"
					v-model="text"
				/>
			</form>
		</div>
		<div class="circle-button" :class="{ open: open }" @click="onToggle">
			<font-awsome-icon icon="plus"/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: '',
			open: false
		}
	},
	methods: {
		onToggle() {
			this.open = !this.open;
		},
		onSubmit(e) {
			e.preventDefault();
			console.log("id: " + this.$store.state.nextID);
			const todo = {
				id : this.$store.state.nextID,
				text: this.text,
				done: false,
			};
			if(todo && todo.text)
				this.$store.dispatch('onSubmit', todo);
			this.text='';
			this.$store.state.nextID++;
			this.onToggle();
		}
	}
};
</script>

<style lang="scss">
.circle-button {
	background: #38d9a9;
	&:hover {
		background: #63e6be;
	}
	&:active {
		background: #20c997;
	}

	z-index: 5;
	cursor: pointer;
	width: 80px;
	height: 80px;
	display: block;
	align-items: center;
	justify-content: center;
	font-size: 60px;
	position: absolute;
	left: 50%;
	bottom: 0px;
	transform: translate(-50%, 50%);
	color: white;
	border-radius: 50%;
	border: none;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;

	transition: 0.125s all ease-in;
}
.circle-button.open {
	background: #ff6b6b;
	&:hover {
		background: #ff8787;
	}
	&:active {
		background: #fa5252;
	}
	transform: translate(-50%, 50%) rotate(45deg);
}

#insert-form-positioner {
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;

  input {
	padding: 12px;
	border-radius: 4px;
	border: 1px solid #dee2e6;
	width: 100%;
	outline: none;
	font-size: 18px;
	box-sizing: border-box;
  }
}
</style>