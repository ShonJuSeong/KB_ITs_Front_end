<template>
  <div class="child">
    <h2>Child2</h2>
  </div>
</template>
<script>
export default {
  name: "Child2",
};
</script>
<style scoped>
.child {
  background-color: blue; /* Child2는 blue, Child3는 orange */
  border: solid 1px black;
  margin: 1.5em;
  padding: 1em;
}
</style>
