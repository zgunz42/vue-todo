<template>
  <div>
    <b-list-group v-if="displayNotes.length">
      <transition-group name="list">
        <b-list-group-item v-for="note in displayNotes" :key="note.id" class="flex-column align-items-start">
          <note-group-list-item
            :note="note"
            @move-to-group="itemClick(note.id, $event)"
          ></note-group-list-item>
        </b-list-group-item>
      </transition-group>
    </b-list-group>
    <section v-else>
      <b-row align-h="center" align-v="center"><p>Has Empty Note Item</p></b-row>
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
<style>
.list-enter-active,
.list-leave-active {
  transition: all 300ms;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
