# Social Network API
## Description
This is a social network API where users can share their thoughts, react to friends’ thoughts and create a friends list. I use Express.js for routing, a MongoDB database and the Mongoose ODM. This application uses the native JavaScript Date object to format timestamps. A URL to the walkthrough video demonstrating some of the functionalities is avaiblable below. While the application is not perfect, it shows the possibilities of APIs when it comes to social networking applications. Please do not hesitate to contact me with any questions. My contact information is listed at the end of this README file. 

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Installation](#installation)
- [Walkthrough Video](#walkthrough-video)
- [More Projects](#more-projects)

## User Story
GIVEN a social network API:
- When I enter the command to invoke the application, my server is started and the Mongoose models are synced to the MongoDB database.
- When I open API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON.
- When I test API POST, PUT, and DELETE routes in Insomnia, I am able to successfully create, update, and delete users and thoughts in my database.
- When I test API POST and DELETE routes in Insomnia, I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Installation 
Clone this repo and intall the proper NPM packages. You will neeed MongoDB and Node.js installed. You will also need Nodemon and Express as dependencies. These can be installed using `npm install nodemon` and `npm install express` respectively. 

To start using this API, go to the root directory of this application and run `npm i` from your CLI. Then, `npm start` to launch the server. The application has been set to serve on localhost port 3001. From there, use Insomnia to run any tests that you may need.

## Walkthough Video
A full walkthough video can be found [here](https://drive.google.com/file/d/1_0kt4sclbheGYw2ph0CYW5Pn39C264s_/view?usp=sharing)

![Screenshot](/assets/malick-ba-tutorial.gif)

## More Projects
For any questions about this project, please email me: malickbax@gmail.com

For more of my projects, please visit my [GitHub page](https://github.com/malickbax)
