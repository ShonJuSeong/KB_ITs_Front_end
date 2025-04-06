<template>
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>
<script>
export default {
  name: "CheckboxItem",
  props: {
    id: [Number, String],
    //name : String,
    name: {
      vaildator(v) {
        return typeof v !== "string"
          ? false
          : v.trim().length >= 4
          ? true
          : false``;
      },
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  //   data() {
  // return {
  //   checked: false,
};
</script>
