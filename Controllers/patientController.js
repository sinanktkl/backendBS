const Brongos = require('../Models/patientSchema')



// addBrongoDetails

exports.AddBrongo = async(req,res)=>{
    console.log("inside AddBrongo controller function");    

    const{patientId,patientName,scopeName,date,time,location,sample,sampleResult,RT_Staff,doctorName}=req.body

    try{
        const newBrongo = new Brongos({
            patientId,patientName,scopeName,date,time,location,sample,sampleResult,RT_Staff,doctorName
        })
        await newBrongo.save()
        res.status(200).json(newBrongo)
    }catch(err){
        res.status(406).json(err)
    }
}





// getBrongoDetails

exports.getBrongoDetails = async (req, res) => {
  console.log("inside getBrongoDetails controller function");

  const searchKey = req.query.search || ""; // default to empty string

  let query = {};
  if (searchKey) {
    query = {
      $or: [
        { patientId: { $regex: searchKey, $options: "i" } },
        { scopeName: { $regex: searchKey, $options: "i" } },
        { location: { $regex: searchKey, $options: "i" } },
        { RT_Staff: { $regex: searchKey, $options: "i" } },
        { doctorName: { $regex: searchKey, $options: "i" } },
        { sample: { $regex: searchKey, $options: "i" } },
        { sampleResult: { $regex: searchKey, $options: "i" } },
      ],
    };
  }

  try {
    const getBrongo = await Brongos.find(query).sort({ createdAt: -1 });
    res.status(200).json(getBrongo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};




// deleteBrongoDetails

exports.deleteBrongoDetails = async(req,res)=>{
    console.log("inside deleteBrongoDetails controller function");

    const {id}=req.params

    try{
        const deleteBrongo = await Brongos.findByIdAndDelete(id)
        res.status(200).json(deleteBrongo)
    }catch(err){
        res.status(406).json(err)
    }
}

// updateBrongoDetails

exports.updateBrongoDetails = async (req, res) => {
    console.log("inside updateBrongoDetails controller function");
  
    const { id } = req.params;
    const {
      patientId,
      patientName,
      scopeName,
      date,
      time,
      location,
      sample,
      sampleResult,
      RT_Staff,
      doctorName
    } = req.body; 
  
    try {
      const updatedBrongo = await Brongos.findByIdAndUpdate(
        id,
        {
          patientId,
          patientName,
          scopeName,
          date,
          time,
          location,
          sample,
          sampleResult,
          RT_Staff,
          doctorName
        },
        { new: true } // returns the updated document
      );
  
      if (!updatedBrongo) {
        return res.status(404).json({ message: "Brongo entry not found" });
      }
  
      res.status(200).json(updatedBrongo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Something went wrong", error: err });
    }
  };
  