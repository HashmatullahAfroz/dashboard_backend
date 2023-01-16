export class Login{

  signIn = (req, res)=>{
    // const obj = ;
    // const json = JSON.stringify(obj);
    // console.log(req.body);
    if(req.body.user === 'hashmat@gmail.com' && req.body.pass === 'hithithit'){
        res.json({"status": true, "data": req.body.user });
      }else{
        res.json({"status": false});
      }
  }

}
