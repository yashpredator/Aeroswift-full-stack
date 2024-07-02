import axios from "axios";

// Cloudinary me jao->Upload->Make a new folder with projectname->Make a new unsigned preset-> then write below code and url with username

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "Aeroswift"); 

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/slimshady1/image/upload", data);
    
    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
