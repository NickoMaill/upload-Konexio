import Form from "./components/Form"
import Button from "./components/Button"
import { useState } from "react"

export default function App() {

    const [image, setImage] = useState("")
    const [userName, setUsername] = useState("")

    const send = () => {
        console.log("dedeede");
        const formData = new FormData()
        formData.append("image", image);
        formData.append("userName", userName)
        fetch("http://localhost:8000/upload", {
            mode:"no-cors",
            method: "POST",
            body: formData,
        });
    };

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
