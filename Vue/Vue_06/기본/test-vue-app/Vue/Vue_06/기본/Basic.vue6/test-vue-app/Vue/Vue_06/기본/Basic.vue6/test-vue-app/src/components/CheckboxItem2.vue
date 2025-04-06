<template>
  <li>
    <input type="checkbox" :checked="isReadonly.checked" />{{ idol.name }}
  </li>
</template>
<script>
export default {
  name: "CheckboxItem2",
  props: ["idol"],
};
</script>
