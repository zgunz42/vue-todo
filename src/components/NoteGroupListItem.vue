<template>
  <b-card>
    <b-card-text>{{ note.message }}</b-card-text>
    <template v-slot:footer>
        <b-row align-h="center">
            <b-button-group>
                <b-button
                        v-if="note.group === 'done' || note.group === 'doing'"
                        @click="moveToGroup(-1)"
                        size="sm"
                        variant="primary"
                >
                    <b-icon icon="chevron-left" aria-hidden="true"></b-icon>
                </b-button>
                <b-button
                        v-if="note.group === 'doing' || note.group === 'todo'"
                        @click="moveToGroup(1)"
                        size="sm"
                        variant="primary"
                >
                    <b-icon icon="chevron-right" aria-hidden="true"></b-icon>
                </b-button>
            </b-button-group>
        </b-row>
    </template>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { Note, Group } from "../../types";

@Component({})
export default class NoteGroupListItem extends Vue {
  @Prop({ required: true, type: Object as () => Note })
  readonly note!: Note;

  @Emit()
  moveToGroup(pointer: number): Group {
    if (pointer < 0) {
      switch (this.note.group) {
        case "doing":
          return "todo";
        case "done":
          return "doing";
        default:
          return this.note.group;
      }
    } else {
      switch (this.note.group) {
        case "todo":
          return "doing";
        case "doing":
          return "done";
        default:
          return this.note.group;
      }
    }
  }
}
</script>

<style scoped></style>
