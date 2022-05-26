<template>
  <div id="tenseFav">
    <button @click="emisor">
      <img
        @mouseover="hover = true"
        @mouseleave="hover = false"
        :src="imgForFavButton">
    </button>
  </div>
</template>

<script>
import starOn from '../img/star.png';
import starOff from '../img/star_off.png';

export default {
	computed: {
		imgForFavButton() {
			if (this.hover === true) {
				return starOn;
			}
			const isFav = this.favs.has(this.id);
			return isFav ? starOn : starOff;
		},
	},
	inject: ['favVerbs'],
	methods: {
		changeImage() {
			if (this.hover === true) {
				this.$refs.favIconRef.src = starOn;
				console.log('on');
			}
			if (this.hover === false) {
				this.$refs.favIconRef.src = starOff;
			}
		},
		emisor() {
			// emits an event to the parent component where the favs are stored
			this.$parent.$emit('toggleFav', this.id);
		},
	},
	name: "TenseFav",
	props: ['id'],
	data() {
		return {
			hover: false,
			favs: this.favVerbs
		}
	},
}
</script>

<style scoped>
#tenseFav {
  margin-right: 10px !important;
}

#tenseFav button {
  border: none;
  background: none;
}
#tenseFav button img {
  width: 19px;
}
</style>