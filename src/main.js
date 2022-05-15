import { createApp } from 'vue';

import App from './App.vue';
import VerbsInput from './components/VerbsInput.vue';
// import FriendContact from './components/FriendContact.vue';
// import NewFriend from './components/NewFriend.vue';

const app = createApp(App);

// app.component('friend-contact', FriendContact);
// app.component('new-friend', NewFriend);
// app.component('verbs-input', VerbsInput);

app.mount('#app');
