import todoSchema from "./schema/todo.schema.js"
export async function  setTodo(req,res){
    try {
        let {todo}=req.body;
        let result=await todoSchema.create({
            todo,
            completed:false
        })
        if(result){
            return res.status(200).send("Todo added successfully")
        }
    return res.status(500).send("not added")
        
    } catch (error) {
        console.log(error);
        return Status(500).send("error occured")
        
    }
}


export async function getTodo(req,res){
    try {
       let result=await todoSchema.find()
       if(result){
        return res.json(result)
       }
        return res.json({msg:"There is no todo to show"})
    } catch (error) {
        console.log(error)
        return res.status(500).send("error occured")
        
    }
}


export async function editTodo(req,res){
    try {
        let {id}=req.query;
        let data=req.body;
        let result=await todoSchema.updateOne({_id:id},data)
         res.json(result)
        
    } catch (error) {
      
        console.log(error)
        return res.status(500).send("error")
        
    }
}
export async function deleteTodo(req,res){
    try {
        let {id}=req.query;
        let result=await todoSchema.deleteOne({_id:id})
        res.json(result)
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("error")
    }
}