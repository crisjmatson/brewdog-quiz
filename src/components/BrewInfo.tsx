import { Component } from "react";
import { Tabs } from "antd";
import { Beer } from "./ResponseInterface";
import "./BrewInfo.css";

const { TabPane } = Tabs;

interface Props {
	beerAnswer: Beer[];
	currentBeer: number;
}
interface State {}

const styles = {
	tabContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "2%",
	},
	tabElement: {
		height: "50vh",
		width: "80vw",
	},
	descriptionTab: {
		fontSize: ".2em",
	},
	descriptionContent: {
		fontSize: "1.4em",
		lineHeight: 1.1,
		height: "30vh",
		overflow: "scroll",
	},
	pairingContainer: {
		width: "auto",
		height: "auto",
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "center",
		justifyContent: "center",
	},
	foodPairings: {
		fontSize: "1.2em",
		lineHeight: 1.1,
		margin: ".2em",
	},
};

export default class BrewInfo extends Component<Props, State> {
	render() {
		return (
			<div style={styles.tabContainer}>
				<Tabs defaultActiveKey="1" tabPosition="top" style={styles.tabElement}>
					<TabPane tab="Image" key="0">
						<img
							style={{ maxHeight: "29vh" }}
							src={
								this.props.beerAnswer[this.props.currentBeer].image_url === null
									? "https://images.unsplash.com/photo-1521572008054-962cefc90ce7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
									: this.props.beerAnswer[this.props.currentBeer].image_url
							}
							alt="beer answer"
						/>
					</TabPane>
					<TabPane tab="Description" key="1" style={styles.descriptionContent}>
						{this.props.beerAnswer[this.props.currentBeer].description}
					</TabPane>
					<TabPane tab="Ingredients" key="2" style={styles.descriptionContent}>
						{" "}
						<div>
							{this.props.beerAnswer[this.props.currentBeer].ingredients.malt
								.length ? (
								<div>
									<b>Malts: {"  "}</b>
									{this.props.beerAnswer[
										this.props.currentBeer
									].ingredients.malt.map((ingredient) => {
										return (
											<span
												key={this.props.beerAnswer[
													this.props.currentBeer
												].ingredients.malt.indexOf(ingredient)}
											>
												{ingredient.name}, {ingredient.amount.value}{" "}
												{ingredient.amount.unit};{"  "}
											</span>
										);
									})}
								</div>
							) : (
								<div>
									<p>no malt information provided</p>
								</div>
							)}
							<hr className="divider" />
							{this.props.beerAnswer[this.props.currentBeer].ingredients.hops
								.length ? (
								<div>
									<b>Hops:</b>{" "}
									{this.props.beerAnswer[
										this.props.currentBeer
									].ingredients.hops.map((ingredient) => {
										return (
											<span
												key={this.props.beerAnswer[
													this.props.currentBeer
												].ingredients.hops.indexOf(ingredient)}
											>
												{ingredient.name}, {ingredient.amount.value}{" "}
												{ingredient.amount.unit};{"  "}
											</span>
										);
									})}
								</div>
							) : (
								<div>
									<p>no hops imformation provided</p>
								</div>
							)}
							<hr className="divider" />
							{this.props.beerAnswer[this.props.currentBeer].ingredients
								.yeast ? (
								<div>
									<b>Yeast:</b>{" "}
									{
										this.props.beerAnswer[this.props.currentBeer].ingredients
											.yeast
									}
								</div>
							) : (
								<div>
									<p>no yeast information provided</p>
								</div>
							)}
						</div>
					</TabPane>
					<TabPane tab="Method" key="3" style={styles.descriptionContent}>
						<div>
							<p>
								<b>Mash:</b>{" "}
								{this.props.beerAnswer[
									this.props.currentBeer
								].method.mash_temp.map((mash) => {
									return (
										<span key={this.props.beerAnswer[
											this.props.currentBeer
										].method.mash_temp.indexOf(mash)}>
											{mash.temp.value} degrees {mash.temp.unit} for{" "}
											{mash.duration} minutes
										</span>
									);
								})}
							</p>
							<span>
								<b>Fermentation:</b>{" "}
								{
									this.props.beerAnswer[this.props.currentBeer].method
										.fermentation.temp.value
								}{" "}
								degrees{" "}
								{
									this.props.beerAnswer[this.props.currentBeer].method
										.fermentation.temp.unit
								}
							</span>
						</div>
					</TabPane>
					<TabPane tab="Tips" key="4" style={styles.descriptionContent}>
						{this.props.beerAnswer[this.props.currentBeer].brewers_tips}
					</TabPane>
					<TabPane tab="Pairings" key="5" style={styles.descriptionContent}>
						<div style={styles.pairingContainer}>
							{this.props.beerAnswer[this.props.currentBeer].food_pairing.map(
								(foodItem) => {
									if (
										this.props.beerAnswer[this.props.currentBeer].food_pairing
											.length -
											1 ===
										this.props.beerAnswer[
											this.props.currentBeer
										].food_pairing.indexOf(foodItem)
									) {
										return (
											<p
												className="foodPair"
												key={this.props.beerAnswer[
													this.props.currentBeer
												].food_pairing.indexOf(foodItem)}
												style={styles.foodPairings}
											>
												& {"  "}
												{foodItem.toLowerCase()}.
											</p>
										);
									} else
										return (
											<p
												className="foodPair"
												key={this.props.beerAnswer[
													this.props.currentBeer
												].food_pairing.indexOf(foodItem)}
												style={styles.foodPairings}
											>
												{"     "}
												{foodItem.toLowerCase()},{"     "}
											</p>
										);
								}
							)}
						</div>
					</TabPane>
				</Tabs>
			</div>
		);
	}
}
