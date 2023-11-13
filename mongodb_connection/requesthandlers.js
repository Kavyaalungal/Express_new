import todoSchema from "./schema/todo.schema.js";

export async function setTodo(req,res){
    try{
    let {todo}=req.body;
    let result = await todoSchema.create({
        todo,
        completed:false
    });
    if(result){
        return res.status(200).send("todo added successfully");
    }
    return res.status(500).send("error in inserting");
}catch(error){
    console.log(error);
    return res.status(500).send("error occured");
}
}

export async function getTodo(req,res){
    try {
        let result = await todoSchema.find()
        if(result){
            return res.json(result)
        }
        return res.json({msg : "there ids no todo to show"})
        
    } catch (error) {
        console.log(error);
    return res.status(500).send("error occured");
    }
}