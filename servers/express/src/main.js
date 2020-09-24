const app = require('express')();


app.get(`/`,(request,response)=>
{
    response.json({message:'Docker container is working! 🐋'})
});

const port = process.env.PORT || 7777;

app.listen(port,()=>console.log(`App is listening on port: ${port}`));