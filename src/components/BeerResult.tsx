import { Component } from "react";
import Radium from "radium";
import { Tooltip } from "antd";
import { Beer } from "./ResponseInterface";
import { LeftSquareFilled, RightSquareFilled } from "@ant-design/icons";
import { CgUndo } from "react-icons/cg";
import "./BeerResult.css";
import BrewInfo from "./BrewInfo";

interface Props {
	resetView: () => void;
	beerAnswer: Beer[];
	random: boolean;
}
interface State {
	currentBeer: number;
}
const styles = {
	hidden: {
		display: "none",
	},
	randomBeer: {
		width: "60vw",
		fontWeight: 200,
		fontSize: "15px",
	},
	pageContainer: {
		fontFamily: "'Source Sans Pro', sans-serif",
		color: "white",
		backgroundColor: "rgba(56, 18, 8, 0.2)",
		height: "100vh",
		minWidth: "100vw",
		display: "flex",
		flexFlow: "column nowrap",
		justifyContent: "center",
		alignItems: "center",
		/* backgroundColor: "rgba(56, 18, 8, 0.2)",
		backgroundBlendMode: "overlay",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		fontFamily: "'Source Sans Pro', sans-serif",
		color: "black",
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center", */
	},
	navBtnShow: {
		display: "block",
		color: "rgba(255, 255, 255, 0.7)",
		fontSize: "3em",
		margin: "15px",
	},
	subPageContainer: {
		width: "90vw",
		display: "flex",
		flexFlow: "column nowrap",
		justifyContent: "center",
		alignItems: "space-around",
	},
	titleContainer: {
		margin: "0",
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100vw",
		height: "30vh",
	},
	beerTitle: {
		fontFamily: "'Space Grotesk', sans-serif",
		fontWeight: 900,
		fontSize: "5vh",
		width: "80vw",
		height: "36vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	beerType: {
		width: "100%",
		fontWeight: 400,
		fontSize: "1.4em",
		height: "10vh",
		padding: "10px 20px",
	},
	beerStats: {
		fontFamily: "'Space Grotesk', sans-serif",
		width: "90vw",
		height: "auto",
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-around",
		alignItems: "center",
	},
	beerStatBadges: {
		fontWeight: 550,
		padding: ".4em",
		margin: "2px",
		width: "20%",
	},
	beerStatBadgesNull: {
		fontWeight: 550,
		padding: ".4em",
		margin: "2px",
		width: "20%",
		color: "rgba(230, 186, 129, 0.6)",
	},
};

class BeerResult extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			currentBeer: 0,
		};
	}

	navigateBeerList = (direction: "back" | "forward") => {
		let max = this.props.beerAnswer.length - 1;
		let current = this.state.currentBeer;
		direction === "forward" && current === max
			? this.setState({ currentBeer: 0 })
			: direction === "forward"
			? this.setState({ currentBeer: current + 1 })
			: direction === "back" && current === 0
			? this.setState({ currentBeer: max - 1 })
			: direction === "back"
			? this.setState({ currentBeer: current - 1 })
			: this.setState({ currentBeer: current });
	};

	arrowNavigation(e: any) {
		let max = this.props.beerAnswer.length - 1;
		let current = this.state.currentBeer;
		if (e.keyCode === 37) {
			/* back */
			current === 0
				? this.setState({ currentBeer: max - 1 })
				: this.setState({ currentBeer: current - 1 });
		} else if (e.keyCode === 40) {
			/* forward */
			current === max
				? this.setState({ currentBeer: 0 })
				: this.setState({ currentBeer: current + 1 });
		}
	}

	render() {
		/* document.addEventListener("keydown", (e: KeyboardEvent) => {
			let max = this.props.beerAnswer.length - 1;
			let current = this.state.currentBeer;
			if (e.code === "ArrowLeft") {
				
				current === 0
					? this.setState({ currentBeer: max - 1 })
					: this.setState({ currentBeer: current - 1 });
			} else if (e.code === "ArrowRight") {
				
				current === max
					? this.setState({ currentBeer: 0 })
					: this.setState({ currentBeer: current + 1 });
			}
		}); */
		return (
			<div style={styles.pageContainer}>
				<div className="restartBtn">
					{this.props.random ? (
						<div style={styles.randomBeer}>
							sorry! no beers matched your answers. <br />
							here's a <s style={{ color: "rgba(252, 167, 69, .7)" }}>
								shot
							</s>{" "}
							beer in the dark.{" "}
						</div>
					) : (
						<div style={styles.hidden}></div>
					)}
					<Tooltip
						placement="left"
						title="Restart Quiz"
						color="rgba(252, 167, 69, .7)"
					>
						<CgUndo onClick={() => this.props.resetView()} />
					</Tooltip>
				</div>
				<div style={styles.titleContainer}>
					<div
						className="navBtnL"
						onClick={() => this.navigateBeerList("back")}
						style={this.props.random ? styles.hidden : styles.navBtnShow}
					>
						<LeftSquareFilled />
					</div>
					<span style={styles.beerTitle}>
						{" "}
						{this.props.beerAnswer[this.state.currentBeer].name.toUpperCase()}
					</span>
					<div
						className="navBtnR"
						onClick={() => this.navigateBeerList("forward")}
						style={this.props.random ? styles.hidden : styles.navBtnShow}
					>
						<RightSquareFilled />
					</div>
				</div>
				<div>
					<div style={styles.subPageContainer}>
						<span style={styles.beerType}>
							{" "}
							{this.props.beerAnswer[this.state.currentBeer].tagline.slice(
								0,
								this.props.beerAnswer[this.state.currentBeer].tagline.length - 1
							)}
						</span>
						<div style={styles.beerStats}>
							<span style={styles.beerStatBadges}>
								<b>ABV:</b> {this.props.beerAnswer[this.state.currentBeer].abv}
							</span>
							{this.props.beerAnswer[this.state.currentBeer].ibu !== null ? (
								<span style={styles.beerStatBadges}>
									<b>IBU:</b>{" "}
									{this.props.beerAnswer[this.state.currentBeer].ibu}
								</span>
							) : (
								<span style={styles.beerStatBadgesNull}>IBU: N/A</span>
							)}
							{this.props.beerAnswer[this.state.currentBeer].ebc !== null ? (
								<span style={styles.beerStatBadges}>
									<b>EBC:</b>{" "}
									{this.props.beerAnswer[this.state.currentBeer].ebc}
								</span>
							) : (
								<span style={styles.beerStatBadgesNull}>EBC: N/A</span>
							)}
							<span style={styles.beerStatBadges}>
								<b>EST:</b>{" "}
								{this.props.beerAnswer[
									this.state.currentBeer
								].first_brewed.slice(3)}
							</span>
						</div>
						<BrewInfo
							beerAnswer={this.props.beerAnswer}
							currentBeer={this.state.currentBeer}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default Radium(BeerResult);
