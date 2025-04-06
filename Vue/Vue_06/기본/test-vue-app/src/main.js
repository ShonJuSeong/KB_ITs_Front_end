import { createApp } from "vue";
// import App from "./App.vue";

// import App from "./App2.vue";`
import App from "./App4.vue";
import CheckboxItem from "./components/CheckboxItem.vue"; // 경로는 실제 위치에 따라 조정

const app = createApp(App);
app.component("CheckboxItem", CheckboxItem);
app.mount("#app");
