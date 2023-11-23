const express = require(`express`);
const router = express.Router();
const user = require(`./m`)
router.post(`/customer`, async (req,res) => {
    try {
        const { userName, email, password } = req.body;
        const userName = await userName.findOne({ userName });
        if (!userName) {
            return res.status(401).json({`invalid username please refresh the page`})
        }
       const email= await email.findOne({email})
    } catch {
        
   }
})





module.export = router;