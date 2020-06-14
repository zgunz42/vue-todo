<template>
  <div>
    <b-list-group v-if="displayNotes.length">
      <b-list-group-item v-for="note in displayNotes" :key="note.id">
        <note-group-list-item
          :note="note"
          @move-to-group="itemClick(note.id, $event)"
        ></note-group-list-item>
      </b-list-group-item>
    </b-list-group>
    <section v-else>
      <p>Has Empty Note Item</p>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import NoteGroupListItem from "@/components/NoteGroupListItem.vue";
import { Group, Note } from "../../types";

@Component({
  components: {
    NoteGroupListItem
  }
})
export default class NoteGroupList extends Vue {
  @Prop({ required: true, default: [] })
  readonly notes!: Note[];

  get displayNotes() {
    return this.notes.sort((a, b) =>
      a.createAt > b.createAt ? 1 : a.createAt === b.createAt ? 0 : -1
    );
  }

  @Emit()
  itemClick(id: number, nextGroup: Group) {
    const note = this.notes.find(value => value.id === id);
    return { note, nextGroup };
  }
}
</script>
