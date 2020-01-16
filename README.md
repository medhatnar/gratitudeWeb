# gratitudeWeb

# Web Version of a homemade gratitude app.

## Tech Stack: (FRONT END)React, Styled-Components, Webpack. (BACKEND) Python, Flask, Sql database.

## Overview:
Daily Gratitude is a simple app created to help the user start their day on a calming and positive note.

Upon opening the app the user is prompted to choose between one of various meditation themes, such as Ocean, Nature, White Noise, or even Guided Meditation for beginners.

Once a selection is made, the user is brought to a page where a timer, set to the user's time of choice, will start to countdown. The countdown is the amount of time the user will have to meditate or, without doing anything else, relax to the themed selected sounds.

After the meditation timer is up, the user will be brought to a page which contains an input field to enter something you are grateful for. The gratitude entry only occurs once per day.

The user is then brought back to the home page where they can optionally select another meditation or take a look at their gratitude calendar, which shows all of their past daily gratitude entries.

## Design Specs:
* Roughly this design: https://dribbble.com/shots/7884860-Meditation-app-Landing-page-concept

* Like the mobile version we want a welcome screen that will present 4 different white noise options: https://dribbble.com/shots/6754418-Meditation-App
* Instead in the web version we will be following this design. Imagine the cards below being the 4 options we saw in the mobile version: https://dribbble.com/shots/7884860-Meditation-app-Landing-page-concept
* The about link will lead to an about page that talks about the app.
* The download app link will send the user to their app store of choice. 
* The Login/Logout link will send user to login page, which will produce a modal to sign in or out.

## Components(Subject to Change):
* **Welcome Page Container**
* Nav bar
* Welcome Text
* Menu Card

* **Meditation Page Container**
* Timer Component
* Graitude Input Field

* Buttons to return to home screen or see past gratitudes.


## Web Specific Specs:
* When the user arrives on the site the text and cards will fade in from the bottom.
* The cards will all be clickable and open a meditation page.
* The meditation page will have a Circular timer component, the white noise that goes along with the meditation (e.g., ocean, rainfall, nature,etc.), and a background and color schema that matches the white noise (simple example: green background and text for nature sounds, blue background and text for ocean sounds).
* The timer component will be a circular timer. When the timer is up it fades and dissapears.
* After the timer component is gone, we want to show the Gratitude entry page.
* The Gratitude Entry page will have an input field fade in and text that states: "Type in something you are grateful for right now"
* The input field will have a submit button but you can also press Enter button to submit.
* Once submit, the gratitude will be stored in a database.
* Once the user submits a "gratitude" you will be given two options: Return to Home Screen? or Look at Past Gratitudes. Option to sign in will also be presented to save your gratitude.

* If user presses Past Gratitudes button, you will be taken to the Calendar page.
* The calendar page will have all past Gratitudes entered.
* The calendar days will have icons and colors showing what type of meditation you did that day.
* The calendar days will also have preview text for the gratitude entered for that day.

* We create the concept of making a user account.
* We create user authentication.
* Calendar should reflect the past gratitudes of the user who is signed in.
* We include a login/register button on the Welcome Page.








