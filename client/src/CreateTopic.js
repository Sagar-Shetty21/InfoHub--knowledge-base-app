import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateTopic = () => {

    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [explaination,setExplaination] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedFileId, setUploadedFileId] = useState(null);


    const handleUpload = async(e) => {

        const file = new FormData();
        file.append("files", selectedFile);
        console.log(selectedFile)
        // const upload_res = await axios({
        //     method: "POST",
        //     url: "${process.env.REACT_APP_STRAPI_ENDPOINT}/api/upload/",
        //     data: file
        // })

        await axios.post(`${process.env.REACT_APP_STRAPI_ENDPOINT}/api/upload/`,file)
            .then((response) => {
                setUploadedFileId(response.data[0].id)
                alert("Image uploaded successfully!")
            })
            .catch((error)=>{
                console.log(error)
                alert("Image failed to upload, Please try again.")
            })
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if(uploadedFileId === null){
            alert("Please upload the image to continue!");
        }else{
            await axios.post(`${process.env.REACT_APP_STRAPI_ENDPOINT}/api/topics`,{
                data: {
                    title,
                    description,
                    image: uploadedFileId,
                    explaination,
                },
            })
            .then((response) => {
                alert("Topic created successfully!")
                navigate('/');
            })
            .catch((error)=>{
                console.log(error)
                alert("Failed to create Topic! Please try again.")
            })
        }
    }

    return (
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2 mt-4">
            <div className="text-center text-2xl font-semibold mb-6">Create a Topic</div>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 font-bold text-gray-600">Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} required type="text" id="title" name="title" placeholder="Enter the title" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                </div>

                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 font-bold text-gray-600">Description</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} required type="text" id="description" name="description" placeholder="A short description for the topic" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                </div>

                <div className="mb-5">
                    <label htmlFor="file" className="block mb-2 font-bold text-gray-600">Image</label>
                    <div className="flex justify-between items-center border border-gray-300 shadow p-3 w-full rounded mb-">
                        <input required type="file" id="file" name="file" className="flex-grow cursor-pointer " onChange={(e) => setSelectedFile(e.target.files[0])} />
                        <div className="bg-blue-400 p-2 rounded-md text-white font-semibold cursor-pointer" onClick={handleUpload}>Upload</div>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="explaination" className="block mb-2 font-bold text-gray-600">Explaination</label>
                    <ReactQuill required theme="snow" value={explaination} onChange={setExplaination} id="explaination" name="explaination" placeholder="Explain the topic" className="border border-gray-300 shadow p-3 w-full rounded mb-"/>            
                </div>    


                <button type="submit" className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg mb-4">Submit</button>

                <Link to="/">
                    <button className="block w-full bg-red-500 text-white font-bold p-4 rounded-lg">Cancel</button>
                </Link>
            </form>
        </div>
    )
}

export default CreateTopic