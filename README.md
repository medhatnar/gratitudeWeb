# gratitudeWeb

# Web Version of a homemade gratitude app.

## Tech Stack: (FRONT END)React, Styled-Components, Webpack. (BACKEND) Python, Flask, Sql database.

![alt text](https://s3.amazonaws.com/poly-screenshots.angel.co/Project/63/1094731/1d4dc0d5c729c68ae848a00062cc3fd8-original.png "Homepage")


## Overview:
Daily Gratitude is a simple app created to help the user start their day on a calming and positive note.

Upon opening the app the user is prompted to choose between one of various meditation themes, such as Ocean, Nature, White Noise, or even Guided Meditation for beginners.

Once a selection is made, the user is brought to a page where a timer, set to the user's time of choice, will start to countdown. The countdown is the amount of time the user will have to meditate or, without doing anything else, relax to the themed selected sounds.

After the meditation timer is up, the user will be brought to a page which contains an input field to enter something you are grateful for. The gratitude entry only occurs once per day.

The user is then brought back to the home page where they can optionally select another meditation or take a look at their gratitude calendar, which shows all of their past daily gratitude entries.

## Design Specs:
* Roughly this design: https://dribbble.com/shots/7884860-Meditation-app-app-page-concept

* Like the mobile version we want a welcome screen that will present 4 different white noise options: https://dribbble.com/shots/6754418-Meditation-App
* Instead in the web version we will be following this design. Imagine the cards below being the 4 options we saw in the mobile version: https://dribbble.com/shots/7884860-Meditation-app-app-page-concept
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


## Specs:

* Design Inspiration - https://dribbble.com/shots/6754418-Meditation-App

* app Page:

   1. Contains Logo Image
   2. Have a sign in form and an option to skip sign in.


* Menu + Menu icon that produces a side collapse with the following options:
  
  
  The options here will be:
          1. Login/Logout
          2. About
          3. Gratitude Calendar (only available if user is loggedin).
   
* Home Page:

    1. Contains a splash image that alternates per day.
    2. A greeting that will be generic for new users, but specific to logged in users.
    3. Menu "cards" to select the meditation theme you would like.

* Meditation Page:


   1. Background Image and color scheme matching the selected theme.
   2. A timer set to user's selected meditation time.
   3. A pause and play button. 
   4. Alternating inspirational quotes somewhere on the page.


* Gratitude Input:
   1. Once the meditation is over, an input field will appear with a submit button.
   2. Above the input field will be a stylized prompt stating, "Enter something you are grateful for".
   3. Once the user enters the gratitude and hits submit, they will be rerouted to the home page if logged in. If not logged in, they will have the option to log in or return to the home page.


### For developers contributing:

* here is a more detailed technical spec: https://bit.ly/2RpQeYH

* to start app for frontend development only: `npm run dev` from root folder.

* to start app for backend development: `flask run` from server folder.











