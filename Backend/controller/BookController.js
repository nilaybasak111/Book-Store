import Book from '../model/BookModel.js'

export const getBook = async(req,res)=>{
    try{
        const findBook = await Book.find();
        //res.status(200).json({msg : `Got the Book ${findBook}`})
        res.status(200).json(findBook)
    }catch(error){
        res.status(500).json({msg: "Internal Error"})
        console.log("There is an Error", error)
    }
}