
# Voting App

This is a simple web application that allows users to vote on a poll. It consists of two web pages and a RESTful API. The backend is built with Node.js and Express, while the frontend is developed using Vue.js.

## Table of Contents

- [Getting Started](#getting-started) 
- [Prerequisites](#prerequisites) 
- [Installation](#installation) 
- [Populating the MongoDB database](#populating-the-mongodb-database) 
	- [Troubleshooting: Issues Connecting to MongoDB Database](#troubleshooting-issues-connecting-to-mongodb-database) 
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

2. Navigate to the project folder and install backend dependencies:
   ```bash
   cd voting-app/backend
   npm install

3. Navigate back to the project folder and install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   

### Populating the MongoDB database


 1. **Install MongoDB:**
	 - Ensure that MongoDB is installed on your machine. You can download it from the official MongoDB website: [MongoDB Download Center](https://www.mongodb.com/try/download/community)


 2. **Create a Database and Collection:**
	 - Open a terminal and run the MongoDB shell:
		 ```bash
		 mongo
	- Inside the MongoDB shell, create a database named 'voting-app':
		```bash
		 use voting-app
	- Create a collection named 'polls':
		```bash
		 db.createCollection("polls")



 3. **Import Example Data:**
	 > Note: The project contains a `polls.json` file containing some example JSON poll data that can be used to populate the database (which is further explained below), but feel free to create your own poll data using the same structure as the examples
	 
	 -   Locate the `polls.json` file in the `data/initialData` folder of the project
	
    -   Use the `mongoimport` command to import the example data into the 'polls' collection:
   
        ```bash
        mongoimport --db voting-app --collection polls --file path/to/your/voting-app/data/initialData/polls.json --jsonArray
     
	> Note: Replace `/path/to/your/voting-app` with the actual path to the directory where you've saved the voting-app code. Ensure that the path is accurate to the location of the `data` directory containing the `initialData` folder.


     
4.  **Verify Data:**
    
    -   Ensure that the data is successfully imported by querying the 'polls' collection:
        ```bash
        db.polls.find()
        ```
        You should see the example polls data.

        
5.  **Run the Application:**
    
    -   Start the backend server and frontend application as described in the `Usage` section of the README.

6.  **Access Example Polls:**
    
    -   Open your browser and go to [http://localhost:8081](http://localhost:8081/) to access the voting app.

    - Use URLs like [http://localhost:8081/poll/1](http://localhost:8081/poll/1) to view different example polls. 
	    - For example, to view the poll with the ID of 3, use [http://localhost:8081/poll/3](http://localhost:8081/poll/3).

<br><br>
#### Troubleshooting: Issues Connecting to MongoDB Database:
<br>
1.  **Database Name Mismatch:**
    
    -   If you encounter issues connecting to the MongoDB database, ensure that the database is named 'voting-app'. The application expects this specific database name
    -   Double-check the database name in the MongoDB shell and the application's configuration

2.  **MongoDB Instance Not Running:**
    
    -   Make sure that the MongoDB instance is running on your machine.
    -   Open a terminal and start MongoDB:
        ```bash    
        mongod
        
    -   Ensure that it is running on the default port **27017**

3.  **Check MongoDB Connection Configuration:**
    
    -   Inspect the connection configuration in the backend's `config.js` or equivalent file.
    -   Verify that the MongoDB connection URL, database name, and other settings are correctly configured.



### Usage
#### Running Locally

1. Start the backend server:
   ```bash
   cd backend
   npm start
   
2. Start the frontend application:
   ```bash
   cd frontend
   npm run serve

3. Open your browser and go to http://localhost:8081/poll/1 to access poll 1 in the voting app.



#### Testing

To maintain the integrity of the production database and prevent interference during testing, an in-memory MongoDB database is utilized. This ensures that tests are conducted on a separate database instance. The in-memory database is spun up when tests are initiated and torn down upon completion.

> Note: Before running the tests, make sure that no instance of the backend application is already running, as the backend server and backend tests use the same port.

**To run backend tests:**

1.  Navigate to the backend directory:
   ```bash
    cd backend
  ``` 
    
2.  Make sure that all dependencies are installed:
   ```bash 
   npm install
   ```

3.  Run the backend tests:
    ```bash
    `npm test` 
    ```

    The tests will use the in-memory database, providing a controlled environment for testing without affecting the production database.

> Note: Frontend testing, leveraging Jest and Selenium, is not implemented due to time constraints.


### Project Structure 
The project is structured into two primary parts:

- **backend**: Contains the Node.js and Express server.
- **frontend**: Contains the Vue.js application.

### Technologies Used
- **Backend:**
  - Node.js and Express: 
  - Mongoose *(MongoDB ORM)*
  - Mocha and Chai *(for testing)*
- **Frontend:**
  - Vue.js
  - HTML, CSS, JavaScript
- **Database:**
  - MongoDB
- **Fonts:**
  - Outfit
 
I chose **Node.js** and **Express** for their efficiency in building scalable server-side apps. Express kept things simple for rapid development, and Mongoose streamlined database interactions.

I opted to use **Vue.js** due to its simplicity and reactivity. I also wanted to gain some experience using Vue as I had not used it previously. Its component-based approach made modular development more simple, improving code maintainability.

I decided to use **MongoDB** for its seamless JavaScript integration. With the project's small scale and data needs, MongoDB's flexibility and scalability seemed appropriate.
 
### Assumptions and Considerations
- Poll creation is assumed to be handled separately, and placeholder polls are used for testing purposes.
- Frontend testing *(using Jest and Selenium)* is not implemented due to time constraints.

### Security Considerations
While the current implementation focuses on functionality, a production-ready application needs careful consideration of security aspects. Implementing authentication and authorization, improving input validation, using data encryption, and enhancing error handling could be some key considerations in order to better fortify the application against potential threats. These measures contribute to safeguarding user data and system integrity.

### Future Improvements

While working on implementing frontend testing with Jest and Selenium, I encountered version conflicts that proved challenging to resolve within the given time constraints. Ideally, I would have liked to implement comprehensive testing for the frontend, utilizing Jest and Selenium to create both unit and end-to-end tests. This would significantly contribute to bolstering the application's reliability and security.

Additionally, there's room for improvement in error handling and validation on both the frontend and backend. The current implementation is basic, and enhancing it would not only fortify the application against potential issues but also provide users with more informative feedback in the case of incorrect inputs.

In terms of the expandability of this project, this basic app serves as a solid foundation for future growth. Potential expansions that could be interesting to implement could include:

- **User Authentication:** Allowing users to log in, save votes, and showcase their voting history.
- **Social Features:** Enabling users to create their polls and rewarding them for accurate predictions.
- **Enhanced User Experience:** Incorporating features like notifications, badges, and leaderboards for a more engaging experience.
