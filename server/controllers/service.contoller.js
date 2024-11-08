const Service = require("../models/service.model")

const serviseData = async (req,res) =>{
    try {
        const responce = await Service.find();
        console.log(responce)
        res.status(200).json(responce)
    } catch (error) {
        next(error)
        res.status(500).jsin({message:`service error ${error}`})
    }
}

module.exports = serviseData;