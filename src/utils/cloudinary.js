import {v2 as cloudinary} from "cloudinary"
import { log } from "console";
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localPathFile) => {
    try {
        if(!localPathFile) return null
        // upload the all file coudinary
        const response = await cloudinary.uploader.upload(localPathFile, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("file is uploaded in cloudinary", response.url);
        return response
        
    } catch (error) {
        fs.unlinkSync(localPathFile)  // remove the locally saved temporary file as the upload operation got failed
        return null 
    }
}

export {uploadOnCloudinary}