# Project Work documentation
- Recently i started to work on a group project. The project name is MeetReady.
- Its a platform that user can use for various type of personal, academic, business meeting booking. 
- Technology user Next.js
- We are four members in the team. 
- The project deadline is 7 weeks. 
- The live link of the project is https://meet-ready.vercel.app/
- Below i will describe my contribution in the project. 

### Authentication
- I was responsible for implementing the authentication part of the project. I worked on both frontend and backend part of auth related functionality.
- I used next-auth. I implemented Credential Provider and Google Provider for registration and login. 
- We started backend api creation with the authentication. So i have to created mongoose connection.
- I also created mongoose schema for User.
- Upon registration for saving user information i created register api route at backend. I takes user information then check by user email whether user exist in database. If user exist in database then it return from there. If user does not exist in database then it hash the user password and save hashed password in the database together with other information. I used bcrypt package for password hashing. 
- I also created auth api route for authentication at backend. In the credential provider section based on user email data is fetched from database then using bcrypt database password and credentials password is matched. If password matched user is returned otherwise does not. Proper try catch block applied to catch errors. A callbacks function is also used. If the account provider is google then it searched the database based on user email. If email exist it returns the user. If user does not exist it save user information in the database and then return user. Jwt token also applied and user name and email from token it passed to session for frontend use. 
- I also setup oAuth for google in the google console. 
- For making our dashboard route and all route nested inside it to private i used middleware function. Its logic ensures that if user does not have token that means he is not logged in. That time if he wants to access dashboard or any route nested inside it, he will be redirect to the login page. On the other hand if the user is logged in and wants to go to the login or register route he will be redirected to the dashboard route. 
- I created session provider function and wrap the whole project by it in order to make sure that session information can be accessed from anywhere in the project. 
- In the the server component i used getServerSession function to access user session.
- In the client component i used useSession hook to access user information. 
- In the navbar i implemented conditional login and logout button showing based on user session information together with user name. 
- In the dashboard sidebar i also implemented sign out functionality. 

### Front end design
- I created edit-event route and designed the page. 

### Front end Design adjustment

- In the dashboard navbar i changed the button color to theme color. 
- In the create-event route i implemented DRY principle in rendering options of a select input. I also changed the design structure of the page to integrate the functionality with server more smoothly. I also applied some conditional logic here. First one is when user will select date from a date range that time a new row will appear for each date that will show the date, relevant day and a time select dropdown. Rows for date,day and time can be increase or decrease by just changing the date from date field. Second one is the value in time select dropdown list will change dynamically based on the duration selected in the duration dropdown list.
- In our scheduled-even route i changed the card background color and added some extra field in the card.


### Api creation at the backend
- Post route for event creation. This route will get data from create-event page and save it to the database. For this is wrote CreateEvent schema also. 
- Get route for all events. This route get email from the frontend as a query parameter and search database based on that email and send all the event found based on that email. 
- Get route for single event. This receive event id in params and search database based on it and send date to front end that is used to populate the field in edit-event page.
- Delete route for event. It takes event id in params and search and delete it in the database. Information comes from events page. 
- Patch route for event. It takes event id in params and search in database based on that id and change the status field in the database. Information comes from events page. 
- Put route for event. It takes event id in params and search in database replace all the field in the database with new data from frontend. The data comes from edit-event page. 
- For the event api route i create Event schema model. 
- I created post route that takes booking data from event page and save it to the database. 
- I the same route a also created a get route which takes email as a query parameter and search in events collection based on that parameter and send all the events based on that email. This information is used to show cards in the scheduled-event page. 

### CRUD operation in the frontend
- In the register route i created handleSubmit function that takes register form data and post it to the '/api/register' route. Using useRouter hook i also redirected user to the login page once registration is successful. 
- Inside the login form component i created handleSubmit function that takes data from login from and send it to the backend for verification. Using useRouter hook i also redirected user to the dashboard once login is successful. For google sign in i also activate the sign in button using onClick functionality. 

- In the TwoPersonEvent component i created formHandler function that collect all the information from the form and send to the backend for saving. 
- In the edit event page i called api to get event data. I populated the data in the from field as a default value. I also created a formHandler function to get form data edited by the user. I then send the data to the backend using put request. Using useRouter hook i also redirected user to the events page once put request is successful. 

- In the events page i call backend api route with email as query parameter. Data received from backend is used to create event card. Before sending data to the event card is added a dynamic link of in the backend data.

- In the event card component is populated the data received from server to the field. So that the card reflect backend data in the ui. 

- In the event card component i also create handleDelete function that takes the event id on clicking delete button and send delete request to the server to delete the event.

- In the event card component i created handleFinish function that takes the event id on clicking finish button and send patch request to update the status property in the database. 

- In the scheduledevent page i fetched scheduled event data from server based on email id. Then using data received from server i feet it into the card that display data in the ui.

- In the event page i fetched data from server based on event id and store in the state. 