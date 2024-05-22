### README.md

This repository contains the source code for a Ebuddy Task built using Express.js.

---

You can access the Postman documentation through this link: [Postman Documentation](https://documenter.getpostman.com/view/14405527/2sA3QnjZzA)

Alternatively, you can download and import it yourself using the following file:

```
./Ebuddy.postman_collection.json
```

---

#### Requirements

- Node.js (minimum version: 16)
- npm (Node Package Manager)

#### Installation

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/neuthos/backend-repo.git
   ```

2. Navigate to the project directory:

   ```
   cd backend-repo
   ```

3. Install dependencies:

   ```
   npm install
   ```

#### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following configurations to the `.env` file:
   ```
    PORT=3001
    ACCESS_TOKEN_SECRET=abogoboga
    API_KEY=AIzaSyBsNoMfC41KAAxoYb7mx3B06Wfjlpt8kOM
    AUTH_DOMAIN=portoweek2.firebaseapp.com
    DATABASE_URL=https://portoweek2-default-rtdb.asia-southeast1.firebasedatabase.app
    PROJECT_ID=portoweek2
    STORAGE_BUCKET=portoweek2.appspot.com
    MESSAGING_SENDER_ID=605947904880
    APP_ID=1:605947904880:web:213140e91ebfd1f93d85b5
   ```

#### Running the Application in Development Mode

To start the Express server, run the following command:

```
npm run start:dev
```

The server will start on port 3001 by default. You can access the application by navigating to `http://localhost:3001` in your web browser.
