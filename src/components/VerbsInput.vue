<template>
	<div id="verbsInput">
		<p style="text-align: center">{{ english }}</p>
<!--    <div class="row">Selected tense: {{ selectedTense }}</div>-->
    <div class="row">
      <span class="englishTense" style="margin-right: 10px">{{tenses.english}}</span>
      <input type="text" @focusin="updateSelectedTense" @focusout="hideHint" placeholder="infinitive" @keyup="checkIfIsRight" v-model="answer.infinitive"/>
      <input type="text" @focusin="updateSelectedTense" @focusout="hideHint" placeholder="past" @keyup="checkIfIsRight" v-model="answer.past"/>
      <input type="text" @focusin="updateSelectedTense" @focusout="hideHint" placeholder="participle" @keyup="checkIfIsRight" v-model="answer.participle"/>
    </div>
    <HintAnswer ref="hint" :selected-tense="selectedTense" :start-count_down="startCountDown" :answer="answer" :tenses="tenses"/>

	</div>
</template>

<script>
import HintAnswer from "./HintAnswer.vue";

export default {
	components: { HintAnswer },
	props: ['english', 'tenses'],
	data() {
		return {
			startCountDown: 'false',
			selectedTense: '',
			answer: {
				english: '',
				infinitive: '',
				past: '',
				participle: ''
			}
		};
	},
	methods: {
		hideHint() {
			console.log('focusOut');
			this.startCountDown = false;
			this.$refs.hint.hideHint();
			/* stop the countDowns in progress */
			this.$refs.hint.stopAllCountDowns();
		},
		checkIfIsRight() {
			if (this.answer[this.selectedTense].toLowerCase() === this.tenses[this.selectedTense].toLowerCase()) {
				console.log('right');
				this.markElementAsCorrect();
			} else {
				this.resetBackgroundColor();
			}
		},
		markElementAsCorrect() {
			// change background to green of the selected input
			this.element.style.backgroundColor = "#bcffad";
		},
		resetBackgroundColor() {
			// reset background
			this.element.style.backgroundColor = "";
		},
		changeVal(varName, newValue) {
			this[varName] = newValue;
		},
		updateSelectedTense(event) {
			this.element = event.target;
			this.selectedTense = (this.element.placeholder);
		},
	},
	computed: {}
};
</script>
<style>
@media screen and (max-width: 900px) and (min-width: 600px) {
}
@media screen and (min-width: 800px) {
#verbsInput  .row{
	display: flex;
	justify-content: center;
}
}
@media screen and (max-width: 800px) {
#verbsInput  .row{
	display: flex;
  flex-direction: column;
	/*justify-content: center;*/
}
}
#verbsInput {
	margin: 0 auto;
	width: 50%;
	/*background: red;*/
}

.englishTense {
  /*min-width: 40px ;*/
  min-width: 80px ;
}
</style>
