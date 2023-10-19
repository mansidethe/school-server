import express from 'express'

const app = express();

app.use(express.json)

app.get('/health',(req, res)=>{
    res.json({
        status:'all good all set'
    })
})

app.get('/students',(req,res)=>{
    res.json({
      sucess: true,
      data:students,
      message: 'successfully fetch on students'
    })
});

const PORT=8080;
 
app.listen((PORT),(
    console.log(`Server is running on port ${PORT}`)
))