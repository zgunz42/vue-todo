<template>
  <div>
    <h3>{{ group }}</h3>
    <note-group-list
      :notes="displayNotes"
      @note-group-change="noteGroupChange"
    ></note-group-list>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Group, Note } from "../../types";
import NoteGroupList from "@/components/NoteGroupList.vue";

@Component({
  components: {
    NoteGroupList
  }
})
export default class NoteGroup extends Vue {
  @Prop({ required: true, type: String as () => Group })
  readonly group!: Group;
  @Prop({ required: true, default: [], type: Array as () => Note[] })
  readonly notes!: Note[];

  get displayNotes() {
    return this.notes.filter(value => value.group === this.group);
  }

  @Emit()
  noteGroupChange(event: object) {
    return event;
  }
}
</script>

<style scoped></style>
