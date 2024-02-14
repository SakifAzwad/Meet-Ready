# Project Work documentation
- Recently I started to work on a group project. The project name is MeetReady.
- It's a platform that users can use for various types of personal, academic, business meeting booking.
- Technology user Next.js
- There are four members in the team.
- The project deadline is 7 weeks.
- The live link of the project is https://meet-ready.vercel.app/
- Below I will describe my contribution to the project.

### Authentication
- I was responsible for implementing the authentication part of the project. I worked on both the frontend and backend part of auth related functionality.
- I used next-auth. I implemented Credential Provider and Google Provider for registration and login.
- We started backend api creation with the authentication. So I have to create a mongoose connection.
- I also created a mongoose schema for Users.
- Upon registration for saving user information I created a register api route at the backend. I take user information then check by user email whether users exist in the database. If a user exists in the database then it returns from there. If a user does not exist in the database then it hashes the user password and saves the hashed password in the database together with other information. I used the bcrypt package for password hashing.
- I also created an auth api route for authentication at the backend. In the credential provider section based on user email data is fetched from the database then using bcrypt database password and credentials password is matched. If a password matched user is returned otherwise does not. Proper try catch block applied to catch errors. A callbacks function is also used. If the account provider is google then it searches the database based on user email. If an email exists it returns the user. If a user does not exist it saves user information in the database and then returns the user. Jwt token also applied and user name and email from token it passed to session for frontend use.
- I also set up oAuth for google in the google console.
- For making our dashboard route and all routes nested inside it private I used a middleware function. Its logic ensures that if the user does not have a token that means he is not logged in. That time if he wants to access the dashboard or any route nested inside it, he will be redirected to the login page. On the other hand if the user is logged in and wants to go to the login or register route he will be redirected to the dashboard route.
- I created a session provider function and wrapped the whole project in it in order to make sure that session information can be accessed from anywhere in the project.
- In the server component I used the getServerSession function to access user sessions.
- In the client component I used the useSession hook to access user information.
- In the navbar i implemented conditional login and logout button showing based on user session information together with user name.
- In the dashboard sidebar I also implemented sign out functionality.
- I made Job-Seeker-Dashboard route and all route inside it private using getServerSession and redirect option. 

- Also if new user login with google he will be redirect to the roleSetting route initially. There he can choose employer or jobSeeker role and after that he will be redirected to the respective dashboard. 

### Front end design
- I created an edit-event route and designed the page.

### Front end Design adjustment

- In the dashboard navbar I changed the button color to theme color.
- In the create-event route I implemented the DRY principle in rendering options of a select input. I also changed the design structure of the page to integrate the functionality with the server more smoothly. I also applied some conditional logic here. First one is when the user selects a date from a date range that time a new row will appear for each date that will show the date, relevant day and a time select dropdown. Rows for date,day and time can be increased or decreased by just changing the date from the date field. Second one is the value in time select dropdown list will change dynamically based on the duration selected in the duration dropdown list.
- In our scheduled-even route I changed the card background color and added some extra field in the card.

- I changed the input field in navbar, footer, editEvent, createEvent page and used single InputField component. 

- I implemented facebook messenger features in our page. 

- I created Job-Seeker-Dashboard route and its layout page.

- Inside the Job-Seeker-Dashboard route layout page using getServerSession i make sure that if no session information available then user will be redirected to the login page. If user role is employer and he want to join this route then he will be redirected to the employer dashboard and if user role is newUser then he will be redirected to the roleSetting page.

- I created DashNave for job-seeker-dashboard route. Inside it create profile, profile and logout button is available. Also user name and image will be shown from the session information. This component will be displayed in all pages of job-seeker-dashboard route. 

- I designed the create-profile page where image, pdf and video upload feature available together with name, skill, email, phone and address input field. Single input component is used and called for every item. 

- I designed the role setting page that will be used for role setting for new user. 

- I designed ImageUpload, PdfUpload, VideoUpload, UserImage, UserName component for using in create-profile page. 

### Api creation at the backend
- Post route for event creation. This route will get data from the create-event page and save it to the database. For this is written CreateEvent schema also.
- Get a route for all events. This route gets email from the frontend as a query parameter and search database based on that email and send all the events found based on that email.
- Get a route for a single event. This receives event id in params and search database based on it and sends date to front end that is used to populate the field in the edit-event page.
- Delete route for event. It takes the event id in params and searches and deletes it in the database. Information comes from the events page.
- Patch route for event. It takes the event id in params and searches in the database based on that id and changes the status field in the database. Information comes from the events page.
- Put a route for the event. It takes the event id in params and searches in the database to replace all the fields in the database with new data from frontend. The data comes from the edit-event page.
- For the event api route I create an Event schema model.
- I created a post route that takes booking data from the event page and saves it to the database.
- In the same route I also created a get route which takes email as a query parameter and searches in the events collection based on that parameter and sends all the events based on that email. This information is used to show cards in the scheduled-event page.

- I created api route for stripe payment.

- I created patch route for role setting inside the api/register route.

- I created api/uploadthing route for image, pdf and video posting. 

### CRUD operation in the frontend
- In the register route I created a handleSubmit function that takes register form data and posts it to the '/api/register' route. Using the useRouter hook I also redirected users to the login page once registration is successful.
- Inside the login form component I created a handleSubmit function that takes data from login form and sends it to the backend for verification. Using the useRouter hook I also redirected the user to the dashboard once login is successful. For google sign in i also activate the sign in button using onClick functionality.

- In the TwoPersonEvent component I created a formHandler function that collects all the information from the form and sends it to the backend for saving.
- In the edit event page i called api to get event data. I populated the data in the form field as a default value. I also created a formHandler function to get form data edited by the user. I then send the data to the backend using a put request. Using the useRouter hook i also redirected user to the events page once put request is successful.

- In the events page I call the backend api route with email as a query parameter. Data received from the backend is used to create event cards. Before sending data to the event card is added a dynamic link of in the backend data.

- In the event card component is populated the data received from server to the field. So that the card reflects backend data in the ui.

- In the event card component I also create handleDelete function that takes the event id on clicking delete button and send delete request to the server to delete the event.

- In the event card component I created handleFinish function that takes the event id on clicking finish button and send patch request to update the status property in the database.

- In the scheduledEvent page i fetched scheduled event data from server based on email id. Then using data received from the server i feed it into the card that display data in the ui.

- In the event page I fetched data from the server based on event id and store in the state. I also send booking data to the server using a post request. I also populated the data received from server to the ui.

- I changed all the api calling from fetch to tanstack and axios.

