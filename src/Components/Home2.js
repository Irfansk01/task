import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Home2 = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        let date = [];
        axios
            .get(
                "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
            )
            .then((res) => {
                let myObj = res.data["Time Series (5min)"];

                Object.keys(myObj).forEach((dateObj) => {
                    date.push({ date: dateObj, ...myObj[dateObj] });
                });
                setData(date);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            
            <table>
                <thead>
                    <th>DateTime</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                </thead>
                <tbody>
                    {data?.map((elem) => (
                        <tr>
                            <td>{elem["date"]}</td>
                            <td>{elem["1. open"]}</td>
                            <td>{elem["2. high"]}</td>
                            <td>{elem["3. low"]}</td>
                            <td>{elem["4. close"]}</td>
                            <td>{elem["5. volume"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home2;