import userSchema from "./schema/user.schema.js";

export async function setData(req,res){
    try{
    let {username, email, hobbies}=req.body;
    let result = await userSchema.create({
        username,
        email,
        hobbies
    });
    if(result){
        return res.status(200).send("data added successfully");
    }
    return res.status(500).send("error in inserting");
}catch(error){
    console.log(error);
    return res.status(500).send("error occured");
}
}

export async function getData(req,res){
    try {
        let result = await userSchema.find()
        if(result){
            return res.json(result)
        }
        return res.json({msg : "there is nothing to show"})
        
    } catch (error) {
        console.log(error);
    return res.status(500).send("error occured");
    }
}


export async function editData(req,res){
    try {
        let {id}=req.query;
        let data=req.body;
        let result=await userSchema.updateOne({_id:id},data)
         res.json(result)
        
    } catch (error) {
      
        console.log(error)
        return res.status(500).send("error")
        
    }
}
export async function deleteData(req,res){
    try {
        let {id}=req.query;
        let result=await userSchema.deleteOne({_id:id})
        res.json(result)
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("error")
    }
}