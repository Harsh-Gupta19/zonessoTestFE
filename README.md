This is a Expo React Native project which have 4 screens are designed (Login, Home, Vehicles list & Vehicles details).
In order to run this project we have to follow below steps.
1) First we have to run "npm i" command to install all node modules dependencies.
2) In the root folder we have "env.js" file where we need to do the changes of base url as per the ip where server is running.
3) Run "npm start" command in the terminal to run the expo build.
4) After the build is running we have to install "Expo" app for android and iPhone as per your respective device.
5) Scan the QR code as mentioned in the termincal where we have run our project.
6) After scan the build will run in expo app and you can go ahead with your build.


In this Native project we have below screens and flows implemented.
*  Initally we landed on the "Login" screen.
* The first login screen will have login button which is only functional to navigate the next screen which is "Home" screen.
* In the Home screen we have integrated and fetched the showrooms details which is mentioned at the bottom of the screen. The showroom details are coming from the getShowrooms api which is integrated in the Home component.
* In the Home at the top left corner we have Motors card if we tap on it, this will redirect us on next screen which is "Vehicles" which is available in "Vehicles" componenet.
* In the Vehicles screen we are calling the getMotors api to fetch all the vehicles details and displaying the list of vehicles.
* In the vehicles screen we are getting each details from API except the vehicles image, which is currently hardcoded.
* On the tap of specific Vehicle card we are navigating to next screen which is the "Vehicles Details" screen and this is integrated in "VehiclesDetails" componenet.
* In the Vehicles details are calling the getVehiclesDetails api to fetch the vehicles details and display the all data from API response.
* In the details screen as well we are hardcoded only the image of vehicle only rest all information is dynamic.
