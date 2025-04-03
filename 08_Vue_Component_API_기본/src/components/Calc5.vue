<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    결과 : {{ result }}
  </div>
</template>

<script>
import { watch, ref } from "vue";

export default {
  name: "Calc5",
  setup() {
    const x = ref(0); // 0으로 초기화
    const result = ref(0); //0 으로 초기화
    watch(x, (current, old) => {
      console.log(`${old} ==> ${current}`);
      result.value = current * 2;
    });
    return { x, result };
  },
};
</script>
