import {db} from "../db.js"


export const getTeam = (req, res)=>{
  const q = "SELECT  * FROM team";
  db.query(q, (err, data)=>{
      if(err) return req.send(err);
      return res.status(200).json(data)
  })
}
