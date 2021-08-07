import {Request,Response} from "express"
import Wallpaper from "../model/wallpaper.model"

export class WallpaperController{

//post
static async  addWallpaper(req:Request,res:Response){
    let{name,image,category}=req.body
    let wallpaer=new Wallpaper(
        {
            name:name,
            image:image,
            category:category
        }
    )
    await wallpaer.save().then((data:any)=>{
        return res.send({
            data:data,
            message:"added",
            added:true
        })
        
    }).catch((error:any)=>{
        return res.send({
            data:error,
            message:"nothing",
            added:false
        })

    })
}

    //get
    static async getWallpaper(req:Request,res:Response){
        try {
            await Wallpaper.find().then((data:any)=>{
                return res.send({
                    data:data,
                    recived:true
                })
            }).catch((erro:any)=>{

            })
            
        } catch (error) {
            return res.send({
                data:error,
                recived:false
            })
            
        }

    }




}