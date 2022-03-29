<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="nameInp" />
          <p class="red-text" v-if="feedback">{{ feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init";
import { collection } from "firebase/firestore/lite";
import { onSnapshot } from "firebase/firestore";
export default {
  name: "Welcome",
  data() {
    return {
      nameInp: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      if (this.nameInp) {
        // let colRef = collection(db, "messages");

        // onSnapshot(
        //   collection(db, "messages"),
        //   (snapshot) => console.log(snapshot.docChanges())
        //   // snapshot.docChanges().forEach((change) => {
        //   //   if (change.type == "added") {
        //   //     let doc = change.doc;
        //   //     this.messages.push({
        //   //       id: doc.id,
        //   //       name: doc.data().name,
        //   //       content: doc.data().content,
        //   //       timestamp: doc.data().timestamp,
        //   //     });
        //   //   }
        //   // })
        // );
        this.$router.push({ name: "Chat", params: { name: this.nameInp } });
      } else {
        this.feedback = "You have to enter the Name";
      }
    },
  },
};
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
</style>
