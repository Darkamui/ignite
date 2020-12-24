import { loadGames } from "../actions/gamesAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../components/GameCard";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

export default function Home() {
	const location = useLocation();
	// Get the 3rd element in the resulted split array
	const pathId = location.pathname.split("/")[2];
	// Send game data to the store
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);
	// Extract specific store data by name from games state
	const { popular, newGames, upcoming, searched } = useSelector(
		(state) => state.games
	);

	return (
		<GameList variants={fadeIn} initial='hidden' animate='show'>
			<AnimateSharedLayout type='crossfade'>
				<AnimatePresence>
					{pathId && <GameDetail pathId={pathId} />}
				</AnimatePresence>
				{searched.length ? (
					<div className='searched'>
						<h2>Search Results</h2>
						<Games>
							{searched.map((game) => (
								<GameCard
									key={game.id}
									name={game.name}
									released={game.released}
									id={game.id}
									image={game.background_image}
								/>
							))}
						</Games>
					</div>
				) : (
					""
				)}
				<h2>Upcoming Games</h2>
				<Games>
					{upcoming.map((game) => (
						<GameCard
							key={game.id}
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
						/>
					))}
				</Games>

				<h2>New Games</h2>
				<Games>
					{newGames.map((game) => (
						<GameCard
							key={game.id}
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
						/>
					))}
				</Games>

				<h2>Popular Games</h2>
				<Games>
					{popular.map((game) => (
						<GameCard
							key={game.id}
							name={game.name}
							released={game.released}
							id={game.id}
							image={game.background_image}
						/>
					))}
				</Games>
			</AnimateSharedLayout>
		</GameList>
	);
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0;
	}
`;

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;
