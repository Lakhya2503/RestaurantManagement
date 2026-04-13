import mongoose from 'mongoose';
import { menuCategoryEnums } from '../utils/constants.js';
const menuSchema = new mongoose.Schema(
    {
        itemsName : {
          type: String,
          required : true,
          trim : true
        },
        itemImage : {
          type :  String,
          required : true
        },
        priceOfItem : {
          type : Number,
          required : true
        },
        itemCategory : {
          type : String,
          default : "",
          required : true,
          enum : menuCategoryEnums
        },
        isAvailable : {
          type : Boolean,
          required : true,
          default: true
        },
        itemDescription : {
          type : String,
          default : ""
        }
   } , { timestamps : true}
)


const Menu = mongoose.model("Menu", menuSchema)
export default Menu;
