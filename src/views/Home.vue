<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <v-card>
      <date-picker v-model="date" outlined />
      <date-picker2 v-model="date2" outlined />
      <v-card-text>
        {{ date }}
        {{ date2 }}
      </v-card-text>
    </v-card>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import datePicker from "@/components/RangeDatePicker.vue";
import datePicker2 from "@/components/DatePicker.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    datePicker,
    datePicker2,
  },
  data() {
    return {
      date: [
        this.$moment().format("YYYY-MM-DD"),
        this.$moment().format("YYYY-MM-DD"),
      ],
      date2: this.$moment().format("YYYY-MM-DD")
    };
  },
};
</script>
