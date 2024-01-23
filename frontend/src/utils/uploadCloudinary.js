const cloud_name = import.meta.env.VITE_CLOUD_NAME
const upload_preset = import.meta.env.VITE_UPLOAD_PRESET

const uploadImagetoCloudinary = async file => {
    const uploadData = new FormData();

    console.log(cloud_name)

    uploadData.append('file', file);
    uploadData.append('upload_preset', upload_preset);
    uploadData.append('cloud_name', cloud_name);
    uploadData.append('folder', "mediaid");

    const res = await fetch (
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
            method : 'post',
            body : uploadData
        }
    );

    const data = res.json();

    return data;
}

export default uploadImagetoCloudinary;