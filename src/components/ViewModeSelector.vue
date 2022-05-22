<template>
  <div style="display: flex; justify-content: center; margin-bottom: 5px">
    <button :class="{active: areAllActive }" @click="emitToggleViewMode(ViewModeEnum.REGULAR)" id="allBtn">all</button>
    <button :class="{active: areFavsActive}" @click="emitToggleViewMode(ViewModeEnum.FAVVERBS)" id="starBtn"><img
        src="../img/star.png"
        alt="star"
        style="width: 60%">
    </button>
<!--    <p>{{ viewMode }} </p>-->
  </div>

  <!--      <button id="favsViewBtn" @click="toggleViewMode">{{ viewModeBtnText }}</button>-->

</template>
<script>

import ViewModeEnum from "../enums/modules/ViewModeEnum";

export default {
	data() {
		return {
			areAllActive: true,
			areFavsActive: false,
			ViewModeEnum
		}
	},
	name: 'ViewModeSelector',
	methods: {
		emitToggleViewMode(mode) {
			if (mode === this.viewMode) {
				//  we check the mode before toggling, in case we click twice in the same button
				// console.log('same');
				return;
			}
			this.$emit('toggleViewMode', mode);
			if (this.viewMode === ViewModeEnum.REGULAR) {
				this.areAllActive = true;
				this.areFavsActive = false;
			} else {
				this.areAllActive = false;
				this.areFavsActive = true;
			}
		},
	},
	props: ['viewMode']
}
</script>
<style>
#app #allBtn {
  color: black;
  width: 58px;
  height: 36px;
  background: #D9D9D9;
  border-radius: 10px 0px 0px 10px;
  /*border: 1px solid black;*/
  border: none;
}

#app #starBtn {
  width: 58px;
  height: 36px;
  /*border: 1px solid black;*/
  border: none;
  border-radius: 0px 10px 10px 0px;
  background: #efefef;
}

body #app .active {
  background: #757575 !important;
  color: white !important;
}
</style>
