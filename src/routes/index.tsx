import { Title } from "@solidjs/meta";
// import Counter from "~/components/Counter";
import { MediaPlayer } from "~/components";

export default function Home() {
	return (
		<main>
			<Title>Media Player</Title>
			<MediaPlayer></MediaPlayer>
			{/* <Counter /> */}
		</main>
	);
}
