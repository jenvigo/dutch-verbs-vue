<template>
  <!-- only show the Hint if it takes more than 3 seconds to reply -->
  <div class="" style="padding-left: 5px">
    <span v-bind:class="{ hidden: isHidden }">Hint: {{ this.tenses[selectedTense] }}</span>
<!--    <p>Counter: {{ this.numberCounter }}</p>-->
  </div>
</template>
<script>
export default {
	name: 'HintAnswer',
	data() {
		return {
			numberCounter: 3,
			isHidden: true,
			countDownIds: [],
			countDownIds_obj: {},
			trigger_count_down: this.start_count_down
		};
	},
	watch:{
		selectedTense(newTense, oldTense) {
			/* the listener is called many times each time, so we need to filter out a bit */
			if (newTense !== oldTense) {
				// console.log(`newTense: ${newTense}`);
				// console.log(`oldTense: ${oldTense}`);
				// console.log('Cambio el tense');
				this.countDown();
			}
		}
	},
	props: {
		start_count_down: {
			type: Boolean,
			default: false
		},
		selectedTense: {
			type: String
		},
		answer: {
			english: '',
			infinitive: '',
			past: '',
			participle: ''
		},
		tenses: {},
	},
	methods: {
		stopAllCountDowns() {
			this.countDownIds.forEach((value) => {
				clearInterval(value);
			});
		},
		hideHint() {
			this.isHidden = true;
		},
		showHint() {
			this.isHidden = false;
		},
		countDown() {
			this.hideHint();
			console.log('countDown');
			this.numberCounter = 3;
			const intervalID = setInterval(() => {
				this.numberCounter--;
				if (this.numberCounter < 1) {
					// 		/* stop the interval if numberCounter is lower than one */
					clearInterval(intervalID);
					this.showHint();
				}
			}, 1000);
			this.countDownIds.push(intervalID);
		}
	}
}
</script>
<style>
p {
  margin-left: 45px;
}

.hidden {
  display: none;
}
</style>
