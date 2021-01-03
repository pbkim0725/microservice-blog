import React from "react";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";

const App = () => {
	return (
		<div className='container'>
			<h1>Create Post!@#!@#!@#!@#</h1>
			<PostCreate />
			<hr />
			<h1>Posts</h1>
			<PostList />
		</div>
	);
};

export default App;
