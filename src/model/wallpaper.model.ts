import mongoose, { Schema } from "mongoose"

export interface image extends Document{
    name:string,
    image:string,
    category:string
}
const WallpaperSchema:Schema=new Schema(
    {
        name:{type:String,require:true},
        image:{type:String,require:true},
        category:{type:String,require:true},
    }
)
const Wallpaper=mongoose.model<image>("Wallpaper",WallpaperSchema)
export default Wallpaper;