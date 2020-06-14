<template>
  <div>
    <ul v-if="displayNotes.length">
      <li v-for="note in displayNotes" :key="note.id">
        <note-group-list-item :note="note"></note-group-list-item>
      </li>
    </ul>
    <section v-else>
      <p>Has Empty Note Item</p>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import NoteGroupListItem from "@/components/NoteGroupListItem.vue";
import { Note } from "../../types";

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
}
</script>
