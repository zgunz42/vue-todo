<template>
  <b-modal
    id="modal-create-note"
    ref="modal"
    title="Create New Note"
    @show="resetModal"
    @hidden="resetModal"
    @ok="saveNote"
  >
    <create-note-form ref="aFrom" :submit-button="false"></create-note-form>
  </b-modal>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";
import CreateNoteForm from "@/components/CreateNoteForm.vue";

@Component({
  components: {
    CreateNoteForm
  }
})
export default class CreateNoteModal extends Vue {
  @Ref("aFrom") form!: CreateNoteForm;
  // createNote(message: string) {}
  resetModal() {
    return void 0;
  }

  saveNote() {
    this.form.handleSubmit();
    return void 0;
  }
}
</script>

<style scoped></style>
