/*
    creating a interface to abstract the response attributes and use in others places without need repeat the code. 
    Making the code more clean and organized.

    I'm always trying to making my code respect the SOLID pattern.
*/

export default interface WeatherResponse {
    current: {
        condition: {
            text: string;
            icon: string;
        },
        feelslike_c: number;
        feelslike_f: number;
        humidity: number;
        temp_c: number;
        temp_f: number;
        wind_kph: number;
        wind_mph: number;
        cloud: number;
    },
    location: {
        country: string;
        name: string;
        region: string;
    }
}
  