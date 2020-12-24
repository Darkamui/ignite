import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
	return (
		<div>
			<GlobalStyles />
			<Nav />
			<Route path={["/game/:id", "/"]}></Route>
			<Home />
		</div>
	);
}

export default App;
