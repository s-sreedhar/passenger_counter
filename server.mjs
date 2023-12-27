import sharp from "sharp"
let array=[1,2,3]
array.map(item=>{
sharp(`./${item}.jpg`).resize(200,200).toFile(`./resized/${item}.jpg`)})
