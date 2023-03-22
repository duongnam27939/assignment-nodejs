import Products from "../model/products";

export const create = async(req,res)=>{
    try {
        const products = await Products.create(req.body)
        return res.status(201).json({
            messgas:"Tạo sản phẩm thành công", products,
        })
    } catch (error) {
        return res.status(404).json({
            messgas: error
        })
    }
}

export const getAll = async(req,res)=>{
    try {
        const products = await Products.find()
        return res.status(201).json(products)
    } catch (error) {
        return res.status(404).json({
            messgas:error
        })
    }
}

export const get = async(req,res)=>{
    try {
        const products = await Products.findById(req.params.id)
        return res.status(201).json(products)
    } catch (error) {
        return res.status(404).json({
            messgas: error
        })
    }
}


export const update = async(req,res)=>{
    try {
        const products = await Products.findOneAndUpdate({_id:req.params.id},req.body)
        return res.status(201).json({
            messgas:"Cập Nhập sản phẩm thành công"
        })
    } catch (error) {
        return res.status(404).json({
            messgas: error
        })
    }
}

export const remove = async(req,res)=>{
    try {
        const products = await Products.findOneAndDelete(req.params.id)
        return res.status(201).json({
            messgas:"Xóa thành công"
        })
    } catch (error) {
        return res.status(404).json({
            messgas: error
        })
    }
}

