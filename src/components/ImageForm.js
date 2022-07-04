import { useState } from "react";
import axios from "axios";
import { GrClose } from "react-icons/gr";

const ImageForm = ({ handleCloseModal }) => {
  const [image, setImage] = useState({ title: "", file: "" });

  const handleChange = (e) => {
    setImage({ ...image, [e.target.name]: e.target.value });
  };
  console.log(image);

  const handleUpload = async () => {
    try {
      await axios.post(
        "https://fileupload-api987.herokuapp.com/uploads",
        image
      );
    } catch (error) {
      console.log(error);
    }
    setImage({
      title: "",
      file: "",
    });
  };

  return (
    <form method="POST" encType="multipart/form-data" onSubmit={handleUpload}>
      <div className="title-field">
        <label>Image Title:</label>
        <input
          type="text"
          name="title"
          value={image.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="image-field">
        <label>Image:</label>
        <input
          type="file"
          name="file"
          value={image.file}
          onChange={handleChange}
          required
        />
      </div>
      <div className="submit-btn">
        <button>Submit</button>
      </div>

      <div className="close-form">
      <GrClose
        style={{ fontSize: 20 }}
        onClick={handleCloseModal}
      />
      </div>
      
    </form>
  );
};

export default ImageForm;
