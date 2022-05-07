<template>
	<div id="verbsInput">
		<p style="text-align: center">{{ english }}</p>
		<div class="row">
			<input type="text" placeholder="infinitive" @keyup="checkIfIsRight" v-model="answer.infinitive"/>
			<input type="text" placeholder="past" @keyup="checkIfIsRight" v-model="answer.past"/>
			<input type="text" placeholder="participle" @keyup="checkIfIsRight" v-model="answer.participle"/>
		</div>
		<!--		<p>Selected tense: {{ selectedTense }}</p>-->
    <HintAnswer :selected-tense="selectedTense" :this="this"/>
	</div>
</template>

<script>
import HintAnswer from "./HintAnswer.vue";

export default {
	components: { HintAnswer },
	props: ['english', 'infinitive', 'past', 'participle'],
	// props: {
	// 	english: {
	// 		type: String,
	// 		required: true,
	// 	}
	// },
	data() {
		return {
			selectedTense: '',
			answer: {
				english: '',
				infinitive: '',
				past: '',
				participle: ''
			}
		};
	},
	created() {
		document.addEventListener("focusin", this.focusChanged);
	},
	beforeUnmount() {
		document.removeEventListener("focusin", this.focusChanged);
	},
	methods: {
		checkIfIsRight() {
			console.log(this.answer[this.selectedTense].toLowerCase());
			console.log(this[this.selectedTense].toLowerCase());
			if (this.answer[this.selectedTense].toLowerCase() === this[this.selectedTense].toLowerCase()) {
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
		focusChanged(event) {
			/* todo: trigger a method in the HintAnswer component like the countDown() */
			this.element = event.target;
			// console.log(this.element.placeholder);
			this.selectedTense = (this.element.placeholder);
		},
	},
	computed: {}
};
</script>
<style>
#verbsInput  .row{
	display: flex;
	justify-content: center;
}
#verbsInput {
	margin: 0 auto;
	width: 50%;
	/*background: red;*/
}
</style>
