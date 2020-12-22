import { Component } from "react";
import { Beer } from "./ResponseInterface";
import { RollbackOutlined, LoadingOutlined } from "@ant-design/icons";
import "./BeerResult.css";

interface Props {
	resetView: () => void;
	beerAnswer: Beer[];
	random: boolean;
}
interface State {
	showIngredients: boolean;
	showMethod: boolean;
	showTips: boolean;
	showDesc: boolean;
	currentBeer: number;
	loadingView: boolean;
}

var styles = {
	beerResultContainer: {
		background:
			"url(https://images.unsplash.com/photo-1546339166-72eaf6a67c3c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80) no-repeat center center fixed",
		WebkitBackgroundSize: "cover",
		MozBackgroundSize: "cover",
		OBackgroundSize: "cover",
		minHeight: "100vh",
		width: "100%",
		height: "100%",
		top: 0,
		left: 0,
		bottom: 5,
		color: "white",
		fontFamily: "'Space Grotesk', sans-serif",
		lineHeight: 0.8,
	},
	loadingView: {
		height: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "40vw",
		color: "rgba(233,163,38,.9)",
	},
	beerImage: {
		width: "auto",
		height: "30vh",
		padding: "1vh",
		marginLeft: "-15vw",
		opacity: ".9",
		zIndex: 0,
	},
	beerContainer: {
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		margin: "-2vh 8vw",
	},
	beerTitleContainer: {
		height: "100%",
		margin: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	beerTitle: {
		color: "white",
		fontSize: "10vw",
		fontWeight: 900,
		lineHeight: 1,
	},
	beerTitleInfo: {
		zIndex: 4,
	},
	pairsWith: {
		justifyContent: "left",
		width: "100%",
	},
	brewersContainer: {
		width: "90vw",
		height: "30%,",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		lineHeight: 0.7,
	},
	brewersButtons: {
		backgroundColor: "rgba(233,163,38,.9)",
		fontSize: "1.5vh",
		marginTop: "2vh",
		padding: "1%",
		margin: "3%",
		border: "thin solid orange",
		borderRadius: "15px",
	},
	brewersInfo: {
		width: "100%",
		lineHeight: 1.3,
		fontSize: "100%",
	},
	foodPairingsContainer: {
		display: "flex",
		justifyContent: "space-around",
		padding: "1%",
	},
	foodPairings: {
		border: "thin solid orange",
		borderRadius: "15px",
		backgroundColor: "rgba(233,163,38,.6)",
		margin: "2%",
		fontSize: "2.5vw",
	},
	rndmItemHidden: {
		display: "none",
	},
	rndmItemShow: {
		display: "block",
	},
	restartBtn: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "1%",
		fontSize: "2.5em",
		color: "orange",
		zIndex: 99,
	},
};

export default class BeerResult extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			showIngredients: false,
			showMethod: false,
			showTips: false,
			showDesc: true,
			currentBeer: 0,
			loadingView: false,
		};
	}
	resetShown = () => {
		this.setState({
			showIngredients: false,
			showMethod: false,
			showTips: false,
			showDesc: false,
		});
	};
	closeLoading = setTimeout(() => {
		this.setState({ loadingView: false });
	}, 1000);

	navigateBeerList = (direction: string) => {
		this.setState({ loadingView: true });
		let max = this.props.beerAnswer.length - 1;
		console.log(max, this.props.beerAnswer);
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
		setTimeout(() => {
			this.setState({ loadingView: false });
		}, 500);
	};

	render() {
		return (
			<div style={styles.beerResultContainer}>
				{this.state.loadingView ? (
					<div style={styles.loadingView}>
						<LoadingOutlined />
					</div>
				) : (
					<div>
						<div style={styles.restartBtn}>
							<span
								onClick={() =>
									/* window.location.reload() */ this.props.resetView()
								}
							>
								<RollbackOutlined />
							</span>
						</div>
						<div style={styles.beerContainer}>
							<div>
								<div style={styles.beerTitleContainer}>
									<span
										onClick={() => this.navigateBeerList("back")}
										style={
											this.props.random
												? styles.rndmItemHidden
												: styles.rndmItemShow
										}
									>
										back
									</span>
									<div style={styles.beerTitleInfo}>
										<div
											style={
												this.props.random
													? styles.rndmItemShow
													: styles.rndmItemHidden
											}
										>
											<p>
												sorry! no beers were a fit. <br />
												here's a <s>shot</s> pint in the dark:
											</p>
										</div>
										<h3 style={styles.beerTitle}>
											{this.props.beerAnswer[this.state.currentBeer].name}
										</h3>
										<p>
											{this.props.beerAnswer[
												this.state.currentBeer
											].tagline.slice(
												0,
												this.props.beerAnswer[this.state.currentBeer].tagline
													.length - 1
											)}
										</p>
										<p>
											est.{" "}
											{
												this.props.beerAnswer[this.state.currentBeer]
													.first_brewed
											}
										</p>
										<p>
											ABV: {this.props.beerAnswer[this.state.currentBeer].abv}{" "}
											-- IBU:{" "}
											{this.props.beerAnswer[this.state.currentBeer].ibu} --
											EBC: {this.props.beerAnswer[this.state.currentBeer].ebc}
										</p>
									</div>
									<img
										style={styles.beerImage}
										src={
											this.props.beerAnswer[this.state.currentBeer]
												.image_url === null
												? "https://images.unsplash.com/photo-1521572008054-962cefc90ce7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
												: this.props.beerAnswer[this.state.currentBeer]
														.image_url
										}
										alt="beer answer"
									/>
									<span
										onClick={() => this.navigateBeerList("forward")}
										style={
											this.props.random
												? styles.rndmItemHidden
												: styles.rndmItemShow
										}
									>
										forward
									</span>
								</div>
								<div>
									<div>
										<span style={styles.pairsWith}>
											pairs with: <br />
										</span>
										<div style={styles.foodPairingsContainer}>
											{this.props.beerAnswer[
												this.state.currentBeer
											].food_pairing.map((foodItem) => {
												return (
													<span key={foodItem} style={styles.foodPairings}>
														{foodItem}
													</span>
												);
											})}
										</div>
									</div>
								</div>
								<div style={styles.brewersContainer}>
									<button
										style={styles.brewersButtons}
										onClick={() => {
											this.resetShown();
										}}
									>
										description
									</button>
									<button
										style={styles.brewersButtons}
										onClick={() => {
											let current = this.state.showIngredients;
											this.resetShown();
											this.setState({ showIngredients: !current });
										}}
									>
										brew ingredients
									</button>
									<button
										style={styles.brewersButtons}
										onClick={() => {
											let current = this.state.showMethod;
											this.resetShown();
											this.setState({ showMethod: !current });
										}}
									>
										brewing method
									</button>
									<button
										style={styles.brewersButtons}
										onClick={() => {
											let current = this.state.showTips;
											this.resetShown();
											this.setState({ showTips: !current });
										}}
									>
										brewer's tips
									</button>
								</div>

								<div>
									<div style={styles.brewersInfo}>
										{this.state.showDesc ? (
											this.props.beerAnswer[this.state.currentBeer].description
										) : this.state.showIngredients ? (
											<div>
												<div>
													Malts:{" "}
													{this.props.beerAnswer[
														this.state.currentBeer
													].ingredients.malt.map((ingredient) => {
														return (
															<span key={ingredient.name}>
																{ingredient.name}, {ingredient.amount.value}{" "}
																{ingredient.amount.unit};{"  "}
															</span>
														);
													})}
												</div>
												<div>
													Hops:{" "}
													{this.props.beerAnswer[
														this.state.currentBeer
													].ingredients.hops.map((ingredient) => {
														return (
															<span
																key={ingredient.name + ingredient.amount.value}
															>
																{ingredient.name}, {ingredient.amount.value}{" "}
																{ingredient.amount.unit};{"  "}
															</span>
														);
													})}
												</div>
												<div>
													Yeast:{" "}
													{
														this.props.beerAnswer[this.state.currentBeer]
															.ingredients.yeast
													}
												</div>
											</div>
										) : this.state.showMethod ? (
											<div>
												<p>
													mash:{" "}
													{this.props.beerAnswer[
														this.state.currentBeer
													].method.mash_temp.map((mash) => {
														return (
															<span key={`${mash.temp.value}${mash.temp.unit}`}>
																{mash.temp.value} degrees {mash.temp.unit} for{" "}
																{mash.duration} minutes
															</span>
														);
													})}
												</p>
												<span>
													fermentation:{" "}
													{
														this.props.beerAnswer[this.state.currentBeer].method
															.fermentation.temp.value
													}{" "}
													degrees{" "}
													{
														this.props.beerAnswer[this.state.currentBeer].method
															.fermentation.temp.unit
													}
												</span>
											</div>
										) : this.state.showTips ? (
											this.props.beerAnswer[this.state.currentBeer].brewers_tips
										) : (
											this.props.beerAnswer[this.state.currentBeer].description
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
