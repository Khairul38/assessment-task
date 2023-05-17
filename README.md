<!-- HOW TO RUN -->

## Run this repository on your local machine

Please follow the below instructions to run this repository on your local machine:

1. Clone this entire repository
   ```sh
   git clone https://github.com/Khairul38/assessment-task.git
   ```
2. Go to the cloned project directory

   ```sh
   cd assessment-task

   ```

3. Then go to client or server directory

   ```sh
   # For client directory
   cd signin-signup-client

   # For server directory
   cd signin-signup-server
   ```

4. Make environment file with the following system

   ```sh
   # For client make .env file accordingly :
   VITE_BASE_URL=http://localhost:3000

   # For server make .local.env file accordingly:
   DATABASE_NAME=test_db
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=postgres
   DATABASE_SYNC=true
   DATABASE_LOGGING=true
   JWT_KEY=thisisthekey
   JWT_EXPIRE=3600
   ```

5. Install dependencies for both app
   ```sh
   npm i
   # or
   yarn
   ```
6. Run server (Default Port is 3000)

   ```sh
   # development
   npm run start

   # watch mode
   npm run start:dev

   # production mode
   npm run start:prod
   ```

7. Run client (Default Port is 5000)

   ```sh
   npm run dev
   ```

<br>

## Thanks
