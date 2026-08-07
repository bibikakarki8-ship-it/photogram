const express= require("express");
const app= express();

const path= require("path");
const methodOverride= require("method-override");
const {v4:uuidv4}=require ("uuid");




const port=3000;


app.use(methodOverride('_method'));



app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded({extended:true}));






app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));





let posts=[

    {
        username:"Bibika",
        id: uuidv4(),
        img:"https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww",
        Caption: "Some endings are beautiful",
        like:"1000",
        comment:"500",
        
    },

    {
        username:"Bishal",
          id:uuidv4(),
         img:"https://images.unsplash.com/photo-1592355591829-aaae33fcff1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWVzdGhldGljfGVufDB8fDB8fHww",
        Caption: "Some endings are beautiful",
        like:"1500",
        comment:"800",
        
    },


    {
          username:"Ganesh",
           id:uuidv4(),
     img:"https://plus.unsplash.com/premium_photo-1673285285994-6bfff235db97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWVzdGhldGljfGVufDB8fDB8fHww",
        Caption: "Some endings are beautiful",
        like:"1000",
        comment:"800",
    
    },

{
    username:"Sita",
       id:uuidv4(),
     img:"https://images.unsplash.com/photo-1541359927273-d76820fc43f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWVzdGhldGljfGVufDB8fDB8fHww",
        Caption: "Some endings are beautiful",
        like:"1200",
        comment:"800",
        
},

{
    username:"Bibhab",
       id:uuidv4(),
     img:"https://plus.unsplash.com/premium_photo-1687509673996-0b9e35d58168?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWVzdGhldGljfGVufDB8fDB8fHww",
        Caption: "Some endings are beautiful",
        like:"200",
        comment:"500",
        

},


{
     username:"Rama",
       id:uuidv4(),
      img:"https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljfGVufDB8fDB8fHww",
        Caption: "Some endings are beautiful",
        like:"900",
        comment:"1000",
        
},

{
     username:"Binod",
       id:uuidv4(),
     img:"https://images.unsplash.com/photo-1546471180-335a013cb87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWVzdGhldGljfGVufDB8fDB8fHww",
        Caption: "Some endings are beautiful",
        like:"300",
        comment:"500",
        
},



]


app.get("/home",(req,res)=>{
    res.render("index.ejs", {posts});
})



app.post("/home", (req,res)=>{
    let{username,img,Caption, like,comment}=req.body;
     let id=uuidv4();

    posts.unshift({username,id,img,Caption,like,comment});

    res.redirect("/home");
})



app.get("/home/new", (req,res)=>{
    res.render("new.ejs" );
})




app.get("/home/:id",(req,res)=>{
     let{id}= req.params;
     let post= posts.find((p)=> id===p.id);
     console.log(post);
     console.log(id);

     res.render("show.ejs",{post});


})





app.patch("/home/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    let newContent= req.body.Caption;
    post.Caption= newContent;
    console.log(post);
    res.redirect("/home");
})



app.get("/home/:id/edit",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=>id=== p.id);
    res.render("edit.ejs",{post});
})



app.delete("/home/:id",(req,res)=>{
    let {id}=req.params;
 posts= posts.filter((p)=>id !=p.id);
res.redirect("/home");

})





app.listen(port, ()=>{
    console.log(`your port ${port}is being listened`);
})






