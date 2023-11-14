
//*********this file is for handle request .what action is taken for that  request********** */


export function getRequesthandler(req,res){
    try {
        console.log("request received")
        res.json("request recieved")
    } catch (error) {
        console.log(error)
        res.json("error occured")
        return
    }
}
export function frmData(req,res){
    try {
        let data=req.body;
        console.log(data)
        res.json("data received")
        
    } catch (error) {
        console.log(error)
        res.json("error occured")
        
    }
   
        
    }

    export function userData(req,res){
        try {
            let data=req.query;   //password are post method so we use req.query to get the data.instead of this we can use req.body but then give method=post in frm action
            console.log(data)
            res.json("data succefully recieved")
            return;
        } catch (error) {
            console.log(error)
            res.json("error occured")
            
        }
    }
