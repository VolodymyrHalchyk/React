import React, {Component} from 'react';
import Car from "./Car/Car";
import './CarStyle/CarStyle.css'

class Cars extends Component {

    cars = [
        { model: 'mazda', year: 2012, power: 2.0, color: 'red', driver: { name: 'Vova', age: 29, sex: 'male', experience: 4 } },
        { model: 'porche', year: 2000, power: 7.5, color: 'black', driver: { name: 'Vasya', age: 28, sex: 'male', experience: 3 } },
        { model: 'mers', year: 1991, power: 2.5, color: 'blue', driver: { name: 'Ira', age: 21, sex: 'female', experience: 1 } },
        { model: 'audi', year: 1999, power: 2.0, color: 'yellow', driver: { name: 'Tolya', age: 34, sex: 'male', experience: 6 } },
        { model: 'zaz', year: 1979, power: 0.7, color: 'white', driver: { name: 'Kolya', age: 55, sex: 'male', experience: 15 } },
        { model: 'toyota', year: 2005, power: 2.5, color: 'grey', driver: { name: 'Olya', age: 35, sex: 'semale', experience: 9 } },
        { model: 'lamorghini', year: 2020, power: 3.7, color: 'red', driver: { name: 'Venya', age: 21, sex: 'male', experience: 4 } },
        { model: 'peugeot', year: 2009, power: 1.5, color: 'green', driver: { name: 'Anna', age: 28, sex: 'female', experience: 5 } },
        { model: 'smart', year: 2018, power: 0.9, color: 'black', driver: { name: 'Vitya', age: 42, sex: 'male', experience: 7 } },
        { model: 'opel', year: 2000, power: 1.9, color: 'red', driver: { name: 'Seb', age: 33, sex: 'male', experience: 8 } },
    ];

    render() {
        return (
            <div className={'all-Cars'}>
                <h1>Cars</h1>
                {this.cars.map((value, index) => {
                    let cls = 'car-one';
                    if (index%2){
                        cls = 'car-two'
                    }
                    return <Car item = {value} key = {value.model} carStyle = {cls} />
                })}
            </div>
        );
    }
}

export default Cars;