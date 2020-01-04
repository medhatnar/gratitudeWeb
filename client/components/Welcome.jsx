import React from 'react';
import { MenuCards } from 'Components/MenuCards';

const WelcomeText = props => {
	return (
		<>
			<h3 class="app-title">Daily Gratitude</h3>
			<h1 class="greeting">{props.greeting}</h1>
			<p class="blurb">{props.infoText}</p>
		</>
	);
};

export const Welcome = props => {
	return (
		<div class='container welcome'>
			<header>
				<nav>
					<span class='logo'>Logo Placeholder</span>
					<a href='#'>About</a>
					<a href='#'>Download App</a>
					<a href='#'>{props.loginLogout}</a>
				</nav>
			</header>
			<main role='main'>
				<div class='container main-content'>
					<div class='welcome-text'>
						<WelcomeText
							greeting='Take a minute to meditate and a moment to reflect'
							infoText='An application with various calming sounds to meditate to and a personal
				diary of all things in your life you are grateful for. Start your day
				positively.'
						/>
					</div>
					<div class='container menu'>
						<MenuCards {...props} />
					</div>
				</div>
			</main>
			{/* splash image */}
			<div class='container splash-image'>
				<figure>
					<img src='some_calming_image.jpg' alt='some calming image' />
					<figcaption>
						Visual explanation of an image for accessibility
					</figcaption>
				</figure>
			</div>
		</div>
	);
};
