import { createSignal } from "solid-js";
import "./MediaPlayer.css";

export default function MediaPlayer() {
	//const [count, setCount] = createSignal(0);
	return (
		<div class="media-player">
			<video
				autoplay
				muted
				src="public/contador1.mp4"
				class="fullscreen-video"
			></video>
		</div>
	);
}
