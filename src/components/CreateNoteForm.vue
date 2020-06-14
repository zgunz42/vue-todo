<template>
  <b-form @submit.stop.prevent="handleSubmit">
    <b-form-group
      :state="messageState"
      label="Note Message"
      label-for="note-message"
      invalid-feedback="Message must more than 4 char"
    >
      <b-form-textarea
        id="note-message"
        v-model="message"
        :state="messageState"
      ></b-form-textarea>
    </b-form-group>
    <b-button v-if="submitButton" type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { ActionTypes } from "../../types";

@Component
export default class CreateNoteForm extends Vue {
  message = "";

  @Prop({ required: false, default: true, type: Boolean })
  submitButton!: boolean;

  get messageState() {
    if (this.message === "") {
      return null;
    }
    return this.message.length > 4;
  }

  // action vuex
  @Emit("submit-data")
  handleSubmit() {
    const message = this.message;
    if (!this.messageState) {
      return;
    }

    this.$store.dispatch(ActionTypes.FAST_ADD_NOTE, message);

    this.message = "";

    return message;
  }
}
</script>

<style scoped></style>
