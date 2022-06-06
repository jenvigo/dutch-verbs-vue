import { createApp } from 'vue';

import App from './App.vue';
import VerbsInput from './components/VerbsInput.vue';
// import FriendContact from './components/FriendContact.vue';
// import NewFriend from './components/NewFriend.vue';
const app = createApp(App);
app.config.devtools = true;

/* todo: add the index.js here so it's our main entrypoint and we can use the methods in the components */
/* todo: add webpack webserver and the npm scripts of this tutorial: https://www.youtube.com/watch?v=r3JpKINIVH8 */

// app.component('friend-contact', FriendContact);
// app.component('new-friend', NewFriend);
// app.component('verbs-input', VerbsInput);

app.mount('#app');
