<template>
  <b-card>
    <b-card-text>{{ todo.message }}</b-card-text>
    <template v-slot:footer>
      <b-button
        v-if="todo.group === 'done' || todo.group === 'doing'"
        @click="moveToGroup(-1)"
        size="sm"
        variant="primary"
      >
        <b-icon icon="chevron-left" aria-hidden="true"></b-icon>
      </b-button>
      <b-button
        v-if="todo.group === 'doing' || todo.group === 'todo'"
        @click="moveToGroup(1)"
        size="sm"
        variant="primary"
      >
        <b-icon icon="chevron-right" aria-hidden="true"></b-icon>
      </b-button>
    </template>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { Todo, Group } from "../../types";

@Component({})
export default class TodoGroupListItem extends Vue {
  @Prop({ required: true, type: Object as () => Todo }) readonly todo:
    | Todo
    | undefined;

  @Emit()
  moveToGroup(pointer: number): Group | undefined {
    if (!this.todo) return;

    if (pointer < 0) {
      switch (this.todo.group) {
        case "doing":
          return "done";
        case "done":
          return "doing";
      }
    } else {
      switch (this.todo.group) {
        case "todo":
          return "doing";
        case "doing":
          return "done";
      }
    }
  }
}
</script>

<style scoped></style>
