const STUTRACKER= require("../model/student.model")


const studentController= {
    test:(req, res) =>{
        res.json("test is working")
    },

    create:async (req, res) => {
        const {name,RollNo}= req.body
        if(!name || !RollNo)
        {
            res.status(200).json( "fill up all fileds")
        }

        try {
            await STUTRACKER.create({...req.body})
            res.status(400).json("student Details is created")
        } catch (error) {
                res.status(500).json({message:error.message || "student details is not created due to some errr"})
        }
    },

    getalldata:async (req,res)=>{
        

        try {
            const data= await STUTRACKER.find()
            res.json(data)
            
        } catch (error) {
            res.status(400).json({message:error.message||"data is not showing"})
        }
  },

  getdataBYiD : async(req,res) =>{
    
    const {Stud_id} =req.params
    const isexiststudent= await STUTRACKER.find({Stud_id})
    if(!isexiststudent)
    {
        return res.status(400).json({message:error.message||"Student  is not found"})
    }
    

    try {
        const data= await STUTRACKER.findById(Stud_id)
          return res.json(data)
    } catch (error) {
       res.status(500).json({message:error.message||"student is not found"})
    }
    
  },
updateData:async(req,res)=>{
    const {Stud_id} = req.params

    try {
        const data = await STUTRACKER.findByIdAndUpdate(Stud_id,{new:true})
        data.Attendence = ! data.Attendence
           data.save()
    } catch (error) {
        res.status(500).json({message:"student data  is not updated"})
    }
  },
delete: async(req, res)=>{
     const {Stud_id} =req.params
    const isexiststudent= await STUTRACKER.find({Stud_id})
    if(!isexiststudent)
    {
        return res.status(400).json({message:"Student is not found"})
    }
    

    try {
        const data= await STUTRACKER.findByIdAndDelete(Stud_id)
       
          res.status(500).json({message:"studentdetail is deleted",data})
    } catch (error) {
       res.status(500).json({message:error.message||"studentdetail is not deleted"})
    }
    


},filter: async (req, res)=>{
  try{
  const {Attendence}= req.body

  let fulfiill= {}
  if(Attendence !== undefined)
  {
      fulfiill.Attendence= (Attendence == true || Attendence == "true")

  }

  let data= await STUTRACKER.find(fulfiill)
  return res.status(200).json(data)
} catch(error)
{
     res.status(200).json({message:error.message || "filtering is not working"})
}
}
}

module.exports= studentController