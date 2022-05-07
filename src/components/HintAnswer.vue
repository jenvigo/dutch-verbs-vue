<template>
  <!-- only show the Hint if it takes more than 3 seconds to reply -->
  <div class="row">
    <p v-bind:class="{ hidden: isHidden }">Hint: {{ this.tenses[selectedTense] }}</p>
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
			trigger_count_down: this.start_count_down
		};
	},
	watch:{
		selectedTense(newTense, oldTense) {
			/* the listener is called many times each time, so we need to filter out a bit */
			if (newTense !== oldTense) {
				console.log(`newTense: ${newTense}`);
				console.log(`oldTense: ${oldTense}`);
				console.log('Cambio el tense');
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
		tenses: {}
	},
	methods: {
		changeIsHidden() {
			this.isHidden = false;
		},
		countDown() {
			this.isHidden = true;
			console.log('countDown');
			this.numberCounter = 3;
			const intervalID = setInterval(() => {
				this.numberCounter--;
				if (this.numberCounter < 1) {
					// 		/* stop the interval if numberCounter is lower than one */
					clearInterval(intervalID);
					this.isHidden = false;
				}
			}, 1000);
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
