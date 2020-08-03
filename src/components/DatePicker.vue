<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        ref="date"
        :label="label"
        prepend-icon="mdi-calendar"
        :append-icon=" isClearable && 'mdi-close'"
        @click:append="pickedDate = null, $refs['date'].blur()"
        readonly
        :value="dateText"
        v-on="on"
        :outlined="outlined"
      ></v-text-field>
    </template>
    <v-date-picker v-model="pickedDate" locale="jp-ja" :day-format="(date) => new Date(date).getDate()" no-title scrollable>
    </v-date-picker>
  </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RangeDatePicker extends Vue {
  /** props */
  @Prop()
  value!: string;
  @Prop({default:'日付'})
  label!: string;
  @Prop({default:false})
  outlined!:boolean;

  /** data */
  menu = false;

  /** computed */
  get dateText() {
    return this.$moment(this.value).isValid() ? this.$moment(this.value).format("YYYY年MM月DD日") : "";
  }

  get isClearable(){
    return !!this.value || undefined;
  }

  get pickedDate(){
    return this.value
  }
  set pickedDate(val){
    this.$emit('input', val);
  }
  /** methods */
}
</script>

<style>
.v-date-picker-table thead th:first-child{
  color: #FF1744;
}
.v-date-picker-table thead th:last-child{
  color: #3949AB;
}
</style>