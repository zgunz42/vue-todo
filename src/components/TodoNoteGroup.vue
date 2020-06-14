<template>
  <div>
    <note-group group="todo" title="todo">
      <template v-slot:actions>
        <b-button v-b-modal.modal-create-note>Add Todo</b-button>
      </template>
    </note-group>
    <create-note-modal></create-note-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NoteGroup from "@/components/NoteGroup.vue";
import CreateNoteModal from "@/components/CreateNoteModal.vue";

@Component({
  components: { NoteGroup, CreateNoteModal }
})
export default class TodoNoteGroup extends Vue {
}
</script>

<style scoped></style>
