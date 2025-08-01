import Address from "../models/Address.js";

//Add address /api/address/add


export const addAddress = async (req, res) => {
    try {
        const {address, userId } = req.body;
        await Address.create({...address, userId})
       return res.json({ success: true, message: 'Address added successfully' })

    } catch (error) {
        console.log(error.message);
      return  res.json({ success: false, message: error.message })
    }
}

//get address : /api/address/get

export const getAddress = async (req, res) => {
    try {
        const{ userId} = req.query
        const addresses = await Address.find({ userId });
       return res.json({ success: true, addresses});

    } catch (error) {
        console.log(error.message);
       return res.json({ success: false, message: error.message });
    }
}
