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

@Component({
  components: {
    NoteGroup,
    TodoNoteGroup
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
