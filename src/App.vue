<template>
  <section>
    <header>
      <h1>Dutch verbs</h1>
    </header>
    <div id="viewMode">
      <button id="favsViewBtn" @click="toggleViewMode">{{ viewModeBtnText }}</button>
    </div>
    <verbs-input
        v-for="verb in verbs"
        :key="verb.english"
        @toggleFav="toggleFav"
        :tenses="{
        english: verb.english,
        infinitive: verb.infinitive,
        past: verb.past,
        participle: verb.participle
      }"
        :viewMode="viewMode"
    />
  </section>
</template>

<script>

import ViewModeEnum from "./enums/modules/ViewModeEnum";
import verbsJson from './data/verbs.json';

export default {
	data() {
		return {
			viewModeBtnText: 'Show favourite verbs',
			verbs: verbsJson.data,
			/* use a set instead of an array so there are no duplicates */
			favVerbs: new Set(),
			/* viewMode is an enum with two options: regular / favVerbs */
			/* using this logic: https://dev.to/kaiquegarcia/dealing-with-enums-in-vue-js-1e1o */
			viewMode: ViewModeEnum.REGULAR,
			viewModes: ViewModeEnum
			// viewMode: 'asdf'
		};
	},
	provide() {
		return {
			favVerbs: this.favVerbs
			// ['bake']
		}
	},
	methods: {
		toggleViewMode() {
			if (this.viewMode === ViewModeEnum.REGULAR) {
				this.viewModeBtnText = 'Show favourite verbs'
				this.viewMode = ViewModeEnum.FAVVERBS;
				return true;
			}
			if (this.viewMode === ViewModeEnum.FAVVERBS) {
				this.viewModeBtnText = 'Show all verbs'
				this.viewMode = ViewModeEnum.REGULAR;
				return true;
			}
			return false;
		},
		toggleFav(selectedVerb) {
			if (this.favVerbs.has(selectedVerb)) {
				this.favVerbs.delete(selectedVerb);
			} else {
				this.favVerbs.add(selectedVerb);
			}
		},
		toggleFavoriteStatus(friendId) {
			const identifiedFriend = this.friends.find(
				(friend) => friend.id === friendId,
			);
			identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
		},
		addContact(name, phone, email) {
			const newFriendContact = {
				id: new Date().toISOString(),
				name,
				phone,
				email,
				isFavorite: false,
			};
			this.friends.push(newFriendContact);
		},
		deleteContact(friendId) {
			this.friends = this.friends.filter(
				(friend) => friend.id !== friendId,
			);
		},
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
  background: #cfcfcf;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}

section {
  display: flex;
  flex-direction: column;
}

#viewMode {
  margin: 0 auto;
  padding-bottom: 20px;
  width: 50%;
}

#favsViewBtn {
  width: 300px;
  display: block;
  margin: 0 auto;
}
</style>
