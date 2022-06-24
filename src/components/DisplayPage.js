import axios from "axios"
import { useEffect, useState } from "react"


const DisplayPage = () => {
  const [displayImages, setDisplayImages] = useState([])

  
useEffect(() => {
  const getImages = async () => {
    try{
      const {data} = await axios.get("https://fileupload-api987.herokuapp.com/uploads");
      setDisplayImages(data.newFile.docs);
      console.log(data)
    } catch (error){
      console.log(error)
    }
  }
  getImages()
}, []);

  return (
    <div>
      {displayImages.map((imagePost) => {
        return (
          <div key={imagePost.id}>
            <p>{imagePost?.title}</p>
            <img src={"https://fileupload-api987.herokuapp.com/uploads/" + imagePost?.file} alt={imagePost?.title}/>
            </div>)})}
    </div>
  )
}

export default DisplayPage
