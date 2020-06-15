<template>
  <div id="app">
    <b-container>
      <b-row :no-gutters="false" class="mt-12">
        <b-col md="4">
          <todo-note-group group="todo"></todo-note-group>
        </b-col>
        <b-col md="4">
          <note-group group="doing"></note-group>
        </b-col>
        <b-col md="4">
          <note-group group="done"></note-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NoteGroup from "@/components/NoteGroup.vue";
import TodoNoteGroup from "@/components/TodoNoteGroup.vue";
import { Group, MutationTypes, Note } from "../types";

@Component({
  components: {
    NoteGroup,
    TodoNoteGroup
  }
})
export default class App extends Vue {
  mounted(): void {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === MutationTypes.INSERT_NOTE) {
        const { note }: { note: Note } = mutation.payload;
        const excerpt = note.message.substr(0, 4);
        this.$bvToast.toast(
          `Todo ${excerpt}... has been created at ${note.createAt.toISOString()}`,
          {
            title: `Todo Added`,
            variant: "info",
            solid: true
          }
        );
      }
      if (mutation.type === MutationTypes.UPDATE_NOTE) {
        const { note, group }: { note: Note; group: Group } = mutation.payload;
        const excerpt = note.message.substr(0, 4);
        this.$bvToast.toast(
          `Todo ${excerpt}... has been moved from ${
            note.group
          } into ${group} at ${note.createAt.toISOString()}`,
          {
            title: `Todo Moved`,
            variant: "info",
            solid: true
          }
        );
      }
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
