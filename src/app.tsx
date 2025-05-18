import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>Media Player Basic</Title>

					{/* <nav>
            <a href="/">Index</a>
            <a href="/about">About</a>
          </nav> */}

					<Suspense>{props.children}</Suspense>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
