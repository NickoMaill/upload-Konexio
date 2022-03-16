import Form from "./components/Form"
import Button from "./components/Button"
import { useEffect, useState } from "react"

export default function App() {

    const [image, setImage] = useState("")
    const [userName, setUsername] = useState("");
    // const [isUpload, setIsUpload] = useState(false)

    const send = () => {
        const formData = new FormData()

        formData.append("image", image);
        formData.append("userName", userName)

        fetch("http://localhost:8000/upload", {
            mode: "no-cors",
            method: "POST",
            body: formData,
        }).then(res => {
            // setIsUpload(true)
            console.log(res.body);
        })
    };


    // if (isUpload === true) {
    //     fetch("http://localhost:8000/upload/list", {
    //         mode: "no-cors",
    //         method:"GET",
    //     })
    //         .then(res => {
    //             console.log(res);
    //         })

    // } else {
    //     console.log('oups');
    // }


    return (
        <>
            <h1>Upload User</h1>
            <Form
                type="text"
                onChange={(e) => setUsername(e.target.value)}
            />
            <Form
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <Button onClick={send}> --- SEND --- </Button>
        </>
    )
}
