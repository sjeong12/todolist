<template>
  <div id="header">
    <h1>{{dateString}}</h1>
	<div class="day">{{dayName}}</div>
	<div class="tasks-left">할 일 {{getUndoneTodo}}개 남음</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const today = new Date();
const dateString = today.toLocaleDateString('ko-KR', {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
});
const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

export default {
	data() {
		return {
			dateString: dateString,
			dayName: dayName,
			undoneTasks: this.$store.getters.getUndoneTodo
		}
	},
	computed: {
		...mapGetters([
			'getUndoneTodo'
		])
	}
};
</script>

<style lang="scss">
	#header {
		padding-top: 48px;
		padding-left: 32px;
		padding-right: 32px;
		padding-bottom: 24px;
		border-bottom: 1px solid #e9ecef;
		h1 {
			margin: 0;
			font-size: 36px;
			color: #343a40;
		}
		.day {
			margin-top: 4px;
			color: #868e96;
			font-size: 21px;
		}
		.tasks-left {
			color: #20c997;
			font-size: 18px;
			margin-top: 40px;
			font-weight: bold;
		}
	}
</style>
