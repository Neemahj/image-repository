// import axios from "axios"
// import { useEffect, useState } from "react"
import {Images} from "./Images"


const DisplayPage = () => {
  // const [displayImages, setDisplayImages] = useState()

  
// useEffect(() => {
//   const getImages = async () => {
//     try{
//       const {data} = await axios.get("https://fileupload-api987.herokuapp.com/uploads");
//       setDisplayImages(data.newFile.docs);
//       console.log(data)
//     } catch (error){
//       console.log(error)
//     }
//   }
//   getImages()
// }, []);

  return (
    // <div>
    //   {displayImages.map((imagePost) => {
    //     return (
    //       <div className="img-ctn" key={imagePost.id}>
    //         <img src={"https://fileupload-api987.herokuapp.com/uploads/" + imagePost?.file} alt={imagePost?.title}/>
    //         <p>{imagePost?.title}</p>
    //       </div>)})}
    // </div>
  
    <div className="container">
      {Images.map(image => {
        return(
          <div className="image-ctn" key={image.id}>
            <img className="each-image" src={image.image} alt={image.name}/>
            <p className="image-title">{image.name}</p>
          </div>
        )
        })}
    </div>

    
  )
}

export default DisplayPage
