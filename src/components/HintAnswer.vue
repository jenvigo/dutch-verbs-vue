<template>
  <!-- todo: only show if it takes more than 3 seconds to reply -->
  <p v-bind:class="{ hidden: isHidden }">Right answer for the selected tense: {{ this[selectedTense] }}</p>
  <p>Counter: {{ this.numberCounter }}</p>
  <button @click="countDown">CountDown</button>
  <button @click="changeIsHidden">changeIsHidden</button>
  <!--  todo: use a setTimeOut para hacer un countdown en la variable numberCounter-->
</template>
<script>
export default {
	name: 'HintAnswer',
	data() {
		return {
			numberCounter: 3,
			isHidden: true,
		};
	},
	props: {
		selectedTense: {},
		this: {}
	},
	methods: {
		changeIsHidden() {
			this.isHidden = false;
		},
		countDown() {
			const intervalID = setInterval(() => {
				this.numberCounter--;
				if (this.numberCounter < 1) {
					// 		/* stop the interval if numberCounter is lower than one */
					clearInterval(intervalID);
					/* todo: change the visibility to show the hint */
					/* todo: remove class hidden */
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
