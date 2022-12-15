## Weather App

- Api which returns weather data of multiple cities 
    - *URL* - [http://localhost:3000/Overview?cities=Mumbai&cities=Paris&cities=Delhi](http://localhost:3000/Overview?cities=Mumbai&cities=Paris&cities=Delhi)

- Api also filters the result by city name or city code
    - By city name - *URL* - [http://localhost:3000/current?city=Delhi](http://localhost:3000/current?city=Delhi)
    - By city code - *URL* - [http://localhost:3000/current?city=10001](http://localhost:3000/current?city=10001) 

- Api should return the data in pagination
    Can specify page and limit. By default page will be 1 and limit will be 50.
    - URL - [http://localhost:3000/overview?cities=Mumbai&cities=Paris&cities=Rajkot&cities=Delhi&cities=Bangalore&page=2&limit=2](http://localhost:3000/overview?cities=Mumbai&cities=Paris&cities=Rajkot&cities=Delhi&cities=Bangalore&page=2&limit=2)

- Detailed Forecast for the next X days.
    - URL - [http://localhost:3000/forecast?city=mumbai&days=2](http://localhost:3000/forecast?city=mumbai&days=2)

- Filter the data by any particular city, any particular date , anyparticular moment
    - By date (date in YYYY-MM-DD format) - URL - [http://localhost:3000/history?city=mumbai&date=2022-10-10](http://localhost:3000/history?city=mumbai&date=2022-10-10)

    - By Time on a particular day - URL - [http://localhost:3000/history?city=mumbai&date=2022-10-10&hour=10](http://localhost:3000/history?city=mumbai&date=2022-10-10&hour=10)

- Current weather conditions of any particular city.
    - URL - [http://localhost:3000/current?city=Delhi](http://localhost:3000/current?city=Delhi)