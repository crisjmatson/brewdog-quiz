import { useState } from "react";
import Radium from "radium";
import BeerQuiz from "./components/BeerQuiz";
import "./App.css";
import { IoBeerSharp } from "react-icons/io5";

function App() {
	const styles = {
		appContainer: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			height: "100%",
			lineHeight: "1",
		},
		introView: {
			display: "flex",
			flexFlow: "column nowrap",
			justifyContent: "space-around",
			width: "100%",
			color: "rgba(56, 18, 8, 0.9)",
			fontWeight: 900,
			lineHeight: 0.99,
			fontFamily: "'Source Sans Pro', sans-serif",
			minHeight: "100vh",
			backgroundSize: "cover",
			backgroundPosition: "center center",
			backgroundBlendMode: "overlay",
		},
		title: {
			color: "white",
			fontSize: "4.6em",
			lineHeight: ".8",
			fontWeight: 900,
			margin: "2vw",
			textShadow: "5px 5px rgba(127, 42, 18, .8)",
			fontFamily: "'Space Grotesk', sans-serif",
		},
		description: {
			width: "90%",
			margin: "8vh auto",
			lineHeight: "1.4",
			fontWeight: 900,
			fontSize: "1.7em",
			color: "white",
			backgroundColor: "rgba(127, 42, 18, .5)",
			padding: "3%",
			border: "thin solid transparent",
			borderRadius: "10px",
		},
		startButton: {
			width: "50vw",
			height: "auto",
			fontSize: "2.2em",
			padding: ".5em",
			backgroundColor: "rgba(113, 22, 0, .6)",
			color: "white",
			fontWeight: 700,
			border: "thin solid transparent",
			textShadow: "1.5px 2px rgba(127,42,18,.85)",
			fontFamily: "'Space Grotesk', sans-serif",
			borderRadius: "10px",
			":hover": {
				backgroundColor: "rgba(113, 22, 0, .3)",
			},
			":active": {
				transform: "translateY(4px)",
			},
		},
		credit: {
			marginBottom: -10,
			width: "100%",
			fontSize: "2em",
			color: "white",
		},
	};
	const [introView, setIntroView] = useState(true);
	const resetIntro = () => setIntroView(false);
	return (
		<div className="App" style={styles.appContainer}>
			{introView ? (
				<div className="appIntro" style={styles.introView}>
					<div>
						<h1 style={styles.title}>Beer Quiz</h1>
						<p style={styles.description}>
							this quiz will pair you with a selection of beers from{" "}
							<a href="https://shopusa.brewdog.com/" target="blank">
								BrewDog's
							</a>
							{"   "}
							catalogue of 325 beers.
						</p>
						<button
							style={styles.startButton}
							onClick={() => setIntroView(false)}
						>
							start
						</button>
					</div>
					<div style={styles.credit}>
						<p>
							made with <IoBeerSharp /> by cris matson{" "}
						</p>
					</div>
				</div>
			) : (
				<BeerQuiz resetIntro={resetIntro} />
			)}
		</div>
	);
}

export default Radium(App);
