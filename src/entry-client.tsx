// @refresh reload
import { StartClient, mount } from "@solidjs/start/client";

const app = document.getElementById("app");
if (!app) throw new Error("No app element found");
else mount(() => <StartClient />, app);
