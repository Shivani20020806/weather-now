Weather Now — React + TypeScript + Vite App
 Description

Weather Now is a modern web application that provides real-time weather information for any city worldwide.
Built with React, TypeScript, and Vite, it delivers fast performance, clean UI, and accurate weather data.
The app uses an external API to fetch temperature, humidity, wind speed, and weather conditions.
It’s designed for both desktop and mobile users with a responsive layout.
Smooth animations and dynamic weather icons enhance the user experience.
The project structure follows modular coding principles for better scalability.
Custom components like SearchBar, WeatherDisplay, and ErrorMessage make code easy to maintain.
Developers can easily extend this app to add new features like weekly forecasts.
This project is great for learning API integration and modern frontend workflows.

 Setup Instructions

Clone this repository using git clone https://github.com/Shivani20020806/weather-now.git.

Open the project folder using any code editor like VS Code.

Run npm install to install all required dependencies.

Create a .env file and add your weather API key as VITE_API_KEY=your_key_here.

Start the app with npm run dev to launch it in development mode.

Open your browser at the URL shown in the terminal (usually http://localhost:5173).

Use the search bar to find weather data for any city worldwide.

To build for production, run npm run build which outputs the optimized bundle.

Serve it locally with npm run preview to test before hosting.

Enjoy a fast, lightweight weather app experience built with Vite.

 Features

Live weather data fetched dynamically from a reliable weather API.

Responsive and mobile-friendly design with smooth transitions.

Real-time search functionality for global cities and towns.

Detailed display including temperature, humidity, and wind speed.

Visual icons representing sunny, cloudy, rainy, or snowy conditions.

Loading spinner and error messages for better UX handling.

Modular component-based architecture using TypeScript.

Fast build times and hot reloads powered by Vite.

Clean and intuitive UI built using modern frontend practices.

Code structured for easy maintenance and future scalability.

 API Details

The app integrates with the OpenWeatherMap API (or similar weather API).

API calls are handled by a dedicated service file weatherService.ts.

It uses the fetch method to retrieve JSON weather data asynchronously.

The API requires a unique key stored securely in the .env file.

Each request includes the city name and metric/imperial units parameter.

The service processes API responses and handles potential errors.

Returned data includes main weather info, temperature, and wind stats.

The app converts and displays all values in a readable format.

Invalid or misspelled city names trigger an ErrorMessage component.

You can easily switch to another weather API by updating the service logic.

 Developer Notes

This project follows a clean component hierarchy for scalability.

TypeScript ensures strong typing and reduces runtime errors.

Vite improves performance with lightning-fast HMR and builds.

Each component has a clear purpose (UI, service, or utility).

Folder structure includes /components, /services, and core files.

Use npm run lint to check code quality before commits.

Add more features such as location-based weather or 7-day forecasts.

Keep API keys private and avoid committing .env to GitHub.

Use Git branches for new features and merge after testing.

Contributions and feedback are welcome to improve functionality.


Screenshot

<img width="948" height="478" alt="image" src="https://github.com/user-attachments/assets/db40f038-ff8b-4c0e-942d-7dba5d1bb8c7" />
<img width="954" height="481" alt="image" src="https://github.com/user-attachments/assets/092de042-8849-45f8-b5d8-f29648db8972" />


