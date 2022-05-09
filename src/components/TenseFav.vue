<template>
  <!-- todo: change to unfav is the verb is on the list of favs -->
  <div>
    <button @click="emisor">{{ textForFavButton }}</button>
  </div>
</template>

<script>
export default {
	computed: {
		textForFavButton() {
			const isFav = this.favs.has(this.id);
			return isFav ? 'UnFav' : 'Fav';
		},
	},
	inject: ['favVerbs'],
	methods: {
		emisor() {
			// emits an event to the parent component where the favs are stored
			this.$parent.$emit('toggleFav', this.id);
		},
	},
	name: "TenseFav",
	props: ['id'],
	data() {
		return {
			favs: this.favVerbs
		}
	},
}
</script>

<style scoped>

</style>