import { useState } from "react";
import BeerQuiz from "./components/BeerQuiz";
import { Button } from "antd";
import "./App.css";

function App() {
	const [introView, setIntroView] = useState(true);
	const resetIntro = () => setIntroView(false);
	return (
		<div
			className="App"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				width: "100%",
				height: "100%",
				lineHeight: "1",
			}}
		>
			{introView ? (
				<div
					style={{
						display: "flex",
						flexFlow: "column nowrap",
						justifyContent: "space-around",
						width: "100%",
						color: "rgba(56, 18, 8, 0.9)",
						fontWeight: 900,
						lineHeight: 0.99,
						fontFamily: "'Space Grotesk', sans-serif",
						minHeight: "100vh",
						backgroundImage:
							"url(https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80)",
						backgroundSize: "cover",
						backgroundPosition: "center center",
					}}
				>
					<div>
						<h1
							style={{
								color: "white",
								fontSize: "4.6em",
								lineHeight: ".8",
								fontWeight: 900,
								margin: "2vw",
								textShadow: "5px 5px rgba(127,42,18,.8)",
							}}
						>
							PUNK Quiz
						</h1>
						<p
							style={{
								width: "90%",
								margin: "8vh auto",
								lineHeight: "1.4",
								fontWeight: 900,
								fontSize: "1em",
								color: "white",
								backgroundColor: "rgba(127,42,18,.7)",
								padding: "3%",
								border: "thin solid transparent",
								borderRadius: "5px",
							}}
						>
							this quiz will pair you with a selection of beers from{" "}
							<a href="https://shopusa.brewdog.com/" target="blank">
								BrewDog's
							</a>
							{"   "}
							catalogue of 325 beers.
						</p>
						<Button
							style={{
								width: "50vw",
								height: "auto",
								fontSize: "2.2em",
								backgroundColor: "rgba(133,42,18,.8)",
								color: "white",
								fontWeight: 700,
								border: "thin solid transparent",
								textShadow: "1.5px 2px rgba(127,42,18,.8)",
							}}
							onClick={() => setIntroView(false)}
						>
							start
						</Button>
					</div>
					<div
						style={{
							position: "sticky",
							marginBottom: -10,
							textAlign: "center",
							width: "100%",
							fontSize: "4.6vw",
						}}
					>
						<p>
							made with 🍻 by <br />
							cris matson 2020{" "}
						</p>
					</div>
				</div>
			) : (
				<BeerQuiz resetIntro={resetIntro} />
			)}
		</div>
	);
}

export default App;
