<style scoped></style>

<template>
  <h2>APP 컴포넌트</h2>
  <hr />
  <ul>
    <!-- <CheckboxItem />
    <CheckboxItem />
    <CheckboxItem />
    <CheckboxItem /> -->
    <CheckboxItem
      v-for="idol in idols"
      :key="idol.id"
      :name="idol.name"
      :checked="idol.checked"
    />
  </ul>
</template>

<script>
import CheckboxItem from "./components/CheckboxItem.vue";
export default {
  name: "App",
  components: { CheckboxItem },
  data() {
    return {
      idols: [
        { id: 1, name: "BTS", checked: true },
        { id: 2, name: "Black Pink", checked: false },
        { id: 3, name: "EXO", checked: false },
        { id: 4, name: "ITZY", checked: false },
      ],
    };
  },
};
</script>
