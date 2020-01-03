const boom = require('boom');
// lean: true -->return the raw js objects, not mongoose documents by passing `lean`

// Get Data Models
const Car = require('../models/Car')

// Get all cars
exports.getCars = async (req, reply) => {
    try {
        const cars = await Car.find();
        return cars;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Get single car by ID
exports.getSingleCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Add a new car
exports.addCar = async (req, reply) => {
    try {
        const car = new Car(req.body);
        return car.save();
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Update an existing car
exports.updateCar = async (req, reply) => {
    try {
        const id = req.params.id;
        const car = req.body;
        console.log(car);
        const { ...updateData } = car;
        const update = await Car.findByIdAndUpdate(id, updateData, { new: true });
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Delete a car
exports.deleteCar = async (req, reply) => {
    try {
        const id = req.params.id;

        //findByIdAndRemove() method 
        //also returns result object 
        //to the callback method along with error object
        
        const car = await Car.findByIdAndRemove(id);
        return car;
    } catch (err) {
        throw boom.boomify(err);
    }
}