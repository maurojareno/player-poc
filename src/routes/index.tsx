import { Title } from "@solidjs/meta";
// import Counter from "~/components/Counter";

export default function Home() {
	return (
		<main>
			<Title>Media Player</Title>
			<video
				autoplay
				muted
				src="public/contador1.mp4"
				class="fullscreen-video"
			></video>
			{/* <Counter /> */}
		</main>
	);
}
