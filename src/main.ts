import { createApp } from "vue";
import App from "./App.vue";
import { bootstrap } from "./cool";

const app = createApp(App);

// 启动
bootstrap(app)
	.then(() => {
		app.mount("#app");
	})
	.catch((err) => {
		console.error("uncle-passport 启动失败", err);
	});
