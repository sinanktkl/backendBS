const mongoose = require("mongoose");




const patientSchema = new mongoose.Schema(
  {  
    patientId: {
      type: String,
      required: true,
      trim: true,
    },
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    scopeName: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String, // store as Date type
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      enum: ["MICU1", "MICU2", "MICU3", "MICU4", "MHDU"],
      required: true,
    },
    sample: {
      type: String,
      enum: ["Not Taken", "Sample Taken"],
      required:true,
    },
    sampleResult: {
      type: String,
    },
    RT_Staff: {
      type: String,
      required: true,
      trim: true,
    },
    doctorName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Brongos = mongoose.model("Brongos", patientSchema);
module.exports = Brongos
