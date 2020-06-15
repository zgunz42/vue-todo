<template>
  <div>
    <transition name="fade" appear>
      <b-row align-content="end" class="mb-2 py-3 mt-3">
        <b-col md="8">
          <h3>{{ groupTitle }}</h3>
        </b-col>
        <b-col md="4">
          <slot name="actions"></slot>
        </b-col>
      </b-row>
    </transition>
    <transition name="scaleDown" appear>
      <note-group-list
        :notes="displayNotes"
        @item-click="noteGroupChange"
      ></note-group-list>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { ActionTypes, Group, Note } from "../../types";
import NoteGroupList from "@/components/NoteGroupList.vue";

@Component({
  components: {
    NoteGroupList
  }
})
export default class NoteGroup extends Vue {
  @Prop({ required: true, type: String as () => Group })
  readonly group!: Group;

  @Prop({ required: false, type: String })
  readonly title!: string;

  get groupTitle() {
    return this.title || this.group;
  }

  get displayNotes() {
    return this.$store.getters.getNoteGroup(this.group);
  }

  @Emit()
  noteGroupChange({ note, nextGroup }: { note: Note; nextGroup: Group }) {
    return this.$store.dispatch(ActionTypes.MOVE_TO_GROUP, {
      note,
      group: nextGroup
    });
  }
}
</script>

<style scoped>
.fade-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-enter-active {
  transition: all 1s;
}
.scaleDown-enter {
  opacity: 0;
  transform: scale(1.2);
}
.scaleDown-enter-active {
  transition: all 1s;
}
</style>
