const Post = require('../models/Post')
const { post } = require('../routes/post')

module.exports = {
    getNote: async (req,res)=>{
        console.log(req)
        // try{
        //     const newPost = await Post.find({post:req.newPost})
        //     const newDate = await Post.find({date:req.newDate})
        //     res.render('notes.ejs', {post: newPost, date: newDate, user: req.user})
        // }catch(err){
        //     console.log(err)
        // }
    },
//     createNote: async (req, res)=>{
//         try{
//             const post = await Post.findById(req.params.id)
//             res.render('post.ejs', {post: post, user: req.user})
//         }catch(err){
//             console.log(err)
//         }
//     },
    
     createFolder: async (req, res)=>{
        try{
            const post = await Post.findById(req.params.id)
            res.render('post.ejs', {post: post, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    
