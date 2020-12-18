import React, {Component} from 'react';
import City from "./City/City";
import "./Cities-style.css"

class Cities extends Component {

    cities = [
        { name: 'Lviv', population: 1000000, country: 'Ukraine', region: 'Europe' },
        { name: 'London', population: 1900000, country: 'England', region: 'Europe' },
        { name: 'Paris', population: 2100000, country: 'France', region: 'Europe' },
        { name: 'Roma', population: 1100000, country: 'Italy', region: 'Europe' },
        { name: 'Tokyo', population: 4000000, country: 'Japan', region: 'Asia' },
        { name: 'Washington', population: 1700000, country: 'USA', region: 'North America' },
        { name: 'Beijing', population: 6000000, country: 'China', region: 'South America' },
        { name: 'Sydney', population: 2700000, country: 'Australia', region: 'Australia' },
        { name: 'Rio', population: 2100000, country: 'Brazil', region: 'South America' },
        { name: 'Dakar', population: 900000, country: 'Senegal', region: 'Africa' },
    ];

    render() {
        return (
            <div className={'cities'}>
                <h1>Cities</h1>
                {this.cities.map((value,index) => {
                    let name = 'one';
                    if (index % 2){
                        name = 'two';
                    }
                    return <City item = {value} key = {value.name} clsname = {name}/>
                })}
            </div>
        );
    }
}

export default Cities;