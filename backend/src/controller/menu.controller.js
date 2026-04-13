import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/ApiResponse.js';
import { requredField } from '../utils/helper.js';
import Menu from '../models/menu.models.js';

const addNewMenu = asyncHandler(async(req,res)=>{

  const { itemName, itemDescription, itemImage, priceOfItem, itemCategory } = req.body

    requredField([itemDescription, itemName, priceOfItem, itemCategory])

    const menu = await Menu.create({
        itemsName : itemName,
        itemDescription : itemDescription,
        itemImage : itemImage.url,
        itemCategory : itemCategory
    })

    return res.status(201).
    json(new ApiResponse(201, {},`${menu.itemName} in menu add successfully` ))

})

const fetchMenuFullMenu = asyncHandler(async(req,res)=>{

  const items = await Menu.find()

  return res.status(200).json(new ApiResponse(200, items ,"all items fetch successfully"))
})

const deleteItem = asyncHandler(async(req,res)=>{

  const  {itemId} = req.params

  await Menu.findByIdAndDelete(itemId)

  return res.status(204).json(new ApiResponse(204, {}, "Item delete sucessfully"))
})

const changePrice = asyncHandler(async(req,res)=>{

  const { itemId } = req.params
  const { newPrice } = req.body

  requredField([newPrice])

  await Menu.findByIdAndUpdate(itemId, {
    $set : {
        priceOfItem : newPrice
    }
  }, { save : false })

    return res.status(201).json(new ApiResponse(201, {}, "item update successfully"))
})




export {
  addNewMenu,
  fetchMenuFullMenu,
  deleteItem,
  changePrice
}
