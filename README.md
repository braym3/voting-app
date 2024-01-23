# Voting App

This is a simple web application that allows users to vote on a poll. It consists of two web pages and a RESTful API. The backend is built with Node.js and Express, while the frontend is developed using Vue.js.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running Locally](#running-locally)
  - [Testing](#testing)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Assumptions and Considerations](#assumptions-and-considerations)
- [Security Considerations](#security-considerations)
- [Future Improvements](#future-improvements)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/braym3/voting-app.git

2. Navigate to the project folder:
   ```bash
   cd voting-app

3. Install dependencies:
   ```bash
   npm install

### Usage
#### Running Locally

1. Start the backend server:
   ```bash
   cd backend
    npm start
   
2. Start the frontend application:
   ```bash
   cd frontend
    npm start

3. Open your browser and go to http://localhost:8081 to access the voting app.

#### Testing

To run backend tests:
   ```bash
   cd backend
    npm test
```

The project includes a folder named data containing example JSON data for polls. This data, located at voting-app/data/initialData/polls.json, can be used to populate a MongoDB database.

Frontend testing, leveraging Jest and Selenium, is not implemented due to time constraints.

### Project Structure 
The project is structured into two primary parts:

- backend: Contains the Node.js and Express server.
- frontend: Contains the Vue.js application.

### Technologies Used
- **Backend:**
  - Node.js and Express: 
  - Mongoose (MongoDB ORM)
  - Mocha and Chai (for testing)
- **Frontend:**
  - Vue.js
  - HTML, CSS, JavaScript
- **Database:**
  - MongoDB
- **Fonts:**
  - Outfit
 
I chose Node.js and Express for their efficiency in building scalable server-side apps. Express kept things simple for rapid development, and Mongoose streamlined database interactions.

I opted to use Vue.js due to its simplicity and reactivity. I also wanted to gain some experience using Vue as I had not used it previously. Its component-based approach made modular development more simple, improving code maintainability.

I decided to use MongoDB for its seamless JavaScript integration. With the project's small scale and data needs, MongoDB's flexibility and scalability seemed appropriate.
 
### Assumptions and Considerations
- Poll creation is assumed to be handled separately, and placeholder polls are used for testing purposes.
- Frontend testing (using Jest and Selenium) is not implemented due to time constraints.

### Security Considerations
While the current implementation focuses on functionality, a production-ready application needs careful consideration of security aspects. Implementing authentication and authorization, improving input validation, using data encryption, and enhancing error handling could be some key considerations in order to better fortify the application against potential threats. These measures contribute to safeguarding user data and system integrity.

### Future Improvements

While working on implementing frontend testing with Jest and Selenium, I encountered version conflicts that proved challenging to resolve within the given time constraints. Ideally, I aspire to implement comprehensive testing for the frontend, utilizing Jest and Selenium to create both unit and end-to-end tests. This would significantly contribute to bolstering the application's reliability and security.

Additionally, there's room for improvement in error handling and validation on both the frontend and backend. The current implementation is basic, and enhancing it would not only fortify the application against potential issues but also provide users with more informative feedback in the case of incorrect inputs.

In terms of the expandability of this project, this basic app serves as a solid foundation for future growth. Potential expansions that could be interesting to implement could include:

- User Authentication: Allowing users to log in, save votes, and showcase their voting history.
- Social Features: Enabling users to create their polls and rewarding them for accurate predictions.
- Enhanced User Experience: Incorporating features like notifications, badges, and leaderboards for a more engaging experience.
