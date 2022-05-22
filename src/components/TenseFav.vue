<template >
  <!-- todo: change to unfav is the verb is on the list of favs -->
  <div id="tenseFav">
    <button @click="emisor"><img style="width: 19px" :src="textForFavButton" alt="favIcon"></button>
  </div>
</template>

<script>
import starOn from '../img/star.png';
import starOff from '../img/star_off.png';

export default {
	computed: {
		textForFavButton() {
			const isFav = this.favs.has(this.id);
			// return isFav ? 'UnFav' : 'Fav';
			return isFav ? starOn : starOff;
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
#tenseFav{
  margin-right: 10px !important;
}
#tenseFav button {
  border: none;
  background: none;
}
</style>