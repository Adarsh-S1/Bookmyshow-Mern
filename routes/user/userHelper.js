
import { USER_COLLECTION } from "../../db/collection.js";
import { ObjectId } from "mongodb";
import bcrpyt from "bcrypt";
import { data } from "../../db/connect.js";
const recommendedMovie = () => {
    return new Promise(async (resolve, reject) => {
        data().collection(USER_COLLECTION).find().toArray().then((res) => {
            resolve(res)
        })
    })
}

export {recommendedMovie}