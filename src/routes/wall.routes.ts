import Routes from "express"
import { WallpaperController } from "../controller/wallpaper.controller"


const routes= Routes()

routes.get('/getWallpaper',WallpaperController.getWallpaper)
routes.post('/addWallpaper',WallpaperController.addWallpaper)
export{routes}