/*
    Styled components is another way to make my code more componentized and reusable.
    Also, if you are going to use React Native you will not need to rewrite the code. 
*/

import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
`;

export const WeatherView = styled.div`
    margin-top: 15px;
    width: 60vw;
    height: 55vh;
    border: 2px solid #878787;
    border-radius: 5px;
`;

export const LocationInfo = styled.div`
    margin: 25px 0px 0px 25px;
    font-weight: 500;
    color: #878787;
`;

export const WeatherInfos = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 200px;
    }

    div {
        font-size: 19px;
        margin: 15px 0px 0px 15px;
    }

    #temperature {
        font-weight: 500;
        font-size: 80px;
    }

`;

export const TemperatureButtons = styled.div`
    display: flex;
    a, p {
        font-size: 16px;
        margin: 0px 5px 0px 5px;
        font-weight: bold;
        cursor: pointer;
    }

`
