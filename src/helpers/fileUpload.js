import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../firebase/config"
import {v4} from "uuid";

export const fileUpload = async (file, id) => {


    console.log(`Este es el nuevo id es el mismo ${id}`);
    const storageRef = ref(storage, `/products/${id}/${v4()}.png`)
    await uploadBytes(storageRef, file)

    const url = await getDownloadURL(storageRef)
    return url


}