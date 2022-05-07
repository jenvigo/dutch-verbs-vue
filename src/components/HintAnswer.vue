<template>
<!-- todo: only show if it takes more than 3 seconds to reply -->
  <p class="hidden">Right answer for the selected tense: {{ this[selectedTense] }}</p>
</template>
<script>
export default {
	name: 'HintAnswer',
	props: {
		selectedTense: {},
		this: {}
	}
}
</script>
<style>
p {
  margin-left: 45px;
}
.hidden{
  display: none;
}
</style>
