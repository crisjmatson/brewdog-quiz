import { Component } from "react";
import "./BeerQuiz.css";
import BeerResult from "./BeerResult";
import { Beer } from "./ResponseInterface";
let d = new Date();
let currentDate = d.toISOString().slice(5, 8) + d.toISOString().slice(0, 4);

interface State {
	quizComplete: boolean;
	currentQuestion: number;
	quiz: Questions[];
	quizResponses: (number | string)[];
	beerAnswer: Beer[];
	random: boolean;
}
interface Props {
	resetIntro: () => void;
}

interface Questions {
	prompt: string;
	options: QuestionOption[];
}
interface QuestionOption {
	option: string;
	answer: number | string;
}

var styles = {
	outerContainer: {
		minWidth: "100vw",
		minHeight: "100vh",
		backgroundColor: "rgba(56, 18, 8, 0.5)",
		backgroundImage:
			"url(https://images.unsplash.com/photo-1505075106905-fb052892c116?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)",
		backgroundBlendMode: "overlay",
		backgroundSize: "cover",
		backgroundAttachment: "fixed",
		fontFamily: "'Space Grotesk', sans-serif",
		display: "flex",
		flexFlow: "column wrap",
		alignContent: "center",
		justifyContent: "center",
	},
	currentpromptNumber: {
		color: "white",
		fontSize: "5vw",
		fontWeight: 900,
		padding: "0vw",
		margin: "0vw",
	},
	currentPrompt: {
		color: "white",
		fontSize: "2em",
		fontWeight: 900,
	},
	optionContainer: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexFlow: "column-reverse wrap",
		justifyContent: "center",
		alignItems: "center",
		padding: ".5em",
		margin: "0vw",
	},
	questionOption: {
		width: "100%",
		height: "7vh",
		backgroundColor: "rgba(127,42,18,.8)",
		color: "white",
		fontSize: "1.7em",
		overflow: "auto",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "1vh",
		padding: "3%",
		fontWeight: 800,
		border: "thin solid transparent",
		borderRadius: "15px",
	},
};

export default class BeerQuiz extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			random: false,
			quizComplete: false,
			currentQuestion: 0,
			quiz: [
				{
					prompt: "how boozy do you want your brew?",
					options: [
						{ option: "NONE", answer: 5 },
						{ option: "keep it light", answer: 8 },
						{ option: "just a pinch", answer: 10 },
						{ option: "I can handle a taste", answer: 12 },
						{ option: "don't mind a bite", answer: 15 },
						{ option: "do your worst!", answer: 56 },
					],
				},
				{
					prompt: "perfect amount of IBU for you?",
					options: [
						{ option: "keep it sweet", answer: 3 },
						{ option: "just a touch", answer: 6 },
						{ option: "I'll take a little bite!", answer: 8 },
						{ option: "I'm okay with a sour", answer: 10 },
						{ option: "doesn't matter to me", answer: 18 },
						{ option: "HIT ME", answer: 9000 },
					],
				},
				{
					prompt: "color would you most like to view?",
					options: [
						{ option: "light as possible.", answer: 6 },
						{ option: "i'll take a tan", answer: 13 },
						{ option: "amber", answer: 20 },
						{ option: "dark amber", answer: 27 },
						{ option: "moderately dark", answer: 34 },
						{ option: "no preference", answer: 200 },
					],
				},
				{
					prompt: "how old do you want the brew to be?",
					options: [
						{ option: "before  2007", answer: "01-2007" },
						{ option: "before 2009", answer: "01-2009" },
						{ option: "before 2011", answer: "01-2011" },
						{ option: "before 2013", answer: "01-2013" },
						{ option: "before 2015", answer: "01-2015" },
						{ option: "any match", answer: `${currentDate}` },
					],
				},
			],
			quizResponses: [0],
			beerAnswer: [
				{
					id: 0,
					name: "string",
					tagline: "string",
					first_brewed: "string",
					description: "string",
					image_url: "string",
					abv: 0,
					ibu: 0,
					target_fg: 0,
					target_og: 0,
					ebc: 0,
					srm: 0,
					ph: 0,
					attenuation_level: 0,
					volume: {
						value: 0,
						unit: "string",
					},
					boil_volume: {
						value: 0,
						unit: "string",
					},
					method: {
						mash_temp: [
							{
								temp: {
									value: 0,
									unit: "string",
								},
								duration: 0,
							},
						],
						fermentation: {
							temp: {
								value: 0,
								unit: "string",
							},
						},
						twist: null,
					},
					ingredients: {
						malt: [
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
							},
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
							},
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
							},
						],
						hops: [
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
								add: "string",
								attribute: "string",
							},
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
								add: "string",
								attribute: "string",
							},
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
								add: "string",
								attribute: "string",
							},
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
								add: "string",
								attribute: "string",
							},
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
								add: "string",
								attribute: "string",
							},
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
								add: "string",
								attribute: "string",
							},
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
								add: "string",
								attribute: "string",
							},
							{
								name: "string",
								amount: {
									value: 0,
									unit: "string",
								},
								add: "string",
								attribute: "string",
							},
						],
						yeast: "string",
					},
					food_pairing: ["string"],
					brewers_tips: "string",
					contributed_by: "string",
				},
			],
		};
	}

	resetView = () => {
		let current = this.state.quizComplete;
		this.setState({
			quizComplete: !current,
			currentQuestion: 0,
			quizResponses: [0],
			random: false,
		});
	};

	answerTally = (questionAnswer: number) => {
		let newAnswerArray = this.state.quizResponses;
		newAnswerArray.push(
			this.state.quiz[this.state.currentQuestion].options[questionAnswer].answer
		);
		this.state.quizResponses[0] === 0
			? this.setState({
					quizResponses: [
						this.state.quiz[this.state.currentQuestion].options[questionAnswer]
							.answer,
					],
			  })
			: this.setState({ quizResponses: newAnswerArray });
		this.nextQ();
	};

	nextQ = () => {
		let next = this.state.currentQuestion + 1;
		next > 3 ? this.buildRequest() : this.setState({ currentQuestion: next });
	};

	buildRequest = () => {
		let fetchURL = "https://api.punkapi.com/v2/beers?";
		fetchURL += `abv_lt=${this.state.quizResponses[0]}&ibu_lt=${this.state.quizResponses[1]}&ebc_lt=${this.state.quizResponses[2]}&brewed_before=${this.state.quizResponses[3]}`;
		console.log(fetchURL);
		this.finalAnswer(fetchURL);
	};

	finalAnswer = async (builtURL: string) => {
		let fetchedBeers = await fetch(builtURL).then((response: Response) =>
			response.json()
		);
		if (fetchedBeers[0] === undefined) {
			this.setState({ random: true });
			let randomBeer = await fetch(
				"https://api.punkapi.com/v2/beers/random"
			).then((response: Response) => response.json());
			this.setState({ beerAnswer: randomBeer });
			return this.setState({ quizComplete: true });
		} else {
			this.setState({ beerAnswer: fetchedBeers });
			return this.setState({ quizComplete: true });
		}
	};

	render() {
		return (
			<div>
				{this.state.quizComplete ? (
					<BeerResult
						beerAnswer={this.state.beerAnswer}
						resetView={this.resetView}
						random={this.state.random}
					/>
				) : (
					<div style={styles.outerContainer}>
						<div>
							<p style={styles.currentpromptNumber}>
								question #{this.state.currentQuestion + 1}
							</p>
							<p style={styles.currentPrompt}>
								{this.state.quiz[this.state.currentQuestion].prompt}
							</p>
						</div>
						<div>
							<div style={styles.optionContainer}>
								{this.state.quiz[this.state.currentQuestion].options.map(
									(mappedOption) => {
										let index = this.state.quiz[
											this.state.currentQuestion
										].options.indexOf(mappedOption);
										return (
											<div
												key={index}
												style={styles.questionOption}
												onClick={() => this.answerTally(index)}
											>
												<span>{mappedOption.option}</span>
											</div>
										);
									}
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
