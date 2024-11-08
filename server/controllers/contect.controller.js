const Contect = require("../models/contect.model");

const contectForm = async (req, res) =>{
try {
    const response = req.body;
    await Contect.create(response)
    console.log("contect")
    return res.status(200).json({message:"contect successfull"})
} catch (error) {
    return res.status(500).json({message:"contect not successfull"})
}
}

module.exports = contectForm;