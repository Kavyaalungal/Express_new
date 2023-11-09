

export function  getRequestHandler(req,res){
    try {
        console.log("response recieved");
        res.json("response recieved");
    } catch (error) {
        console.log(error);
        res.json("error occured");
        
    }

}