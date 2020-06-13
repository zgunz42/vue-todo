<template>
  <div>
    <ul v-if="displayTodos.length">
      <li v-for="todo in displayTodos" :key="todo.id">
        <todo-group-list-item :todo="todo"></todo-group-list-item>
      </li>
    </ul>
    <section v-else>
      <p>Has Empty Todo Item</p>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TodoGroupListItem from "@/components/TodoGroupListItem.vue";
import { Todo } from "../../types";

@Component({
  components: {
    TodoGroupListItem
  }
})
export default class TodoGroupList extends Vue {
  @Prop({ required: true, default: [] })
  readonly todos!: Todo[];

  get displayTodos() {
    return this.todos.sort((a, b) =>
      a.createAt > b.createAt ? 1 : a.createAt === b.createAt ? 0 : -1
    );
  }
}
</script>
