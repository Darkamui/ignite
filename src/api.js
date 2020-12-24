//Base URL - returns empty object
const base_url = "https://api.rawg.io/api/";

// Getting the date wanted for list of games
const getCurrentMonth = () => {
	// Dates array goes from 0 to 11
	const month = new Date().getMonth() + 1;
	//Format upon having one or two digits
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

const getCurrentDay = () => {
	const day = new Date().getDate();
	//Format upon having one or two digits
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

//Output variables
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Fetch popular games from previous,current and next year then order by rating with a page limit of 10 games
const populer_games = `games?dates=${lastYear},${currentDate},${nextYear}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// Final URLs
export const popularGamesURL = () => `${base_url}${populer_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
// Fetch game details of specific game
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
// Fetch game screenshots
export const gameScreenshotURL = (game_id) =>
	`${base_url}games/${game_id}/screenshots`;
// Fetch searched game
export const searchGameURL = (game_name) =>
	`${base_url}games?search=${game_name}&page_size=9`;
