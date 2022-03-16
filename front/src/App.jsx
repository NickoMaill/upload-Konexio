import Form from "./components/Form"
import Button from "./components/Button"
import { useEffect, useState } from "react"

export default function App() {

    const [image, setImage] = useState("")
    const [userName, setUsername] = useState("");
    const [userList, setUserList] = useState([])
    const [isUpload, setIsUpload] = useState(false)


    useEffect(() => {
        fetch("http://localhost:8000/upload")
            .then(res => res.json())
            .then(data => {
                setUserList(data)
                setIsUpload(true)
            })
    }, [])

    const send = () => {
        const formData = new FormData()

        formData.append("image", image);
        formData.append("userName", userName)

        fetch("http://localhost:8000/upload", {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                setUserList(data)
                console.info("uploaded");
            })
    };

    if (isUpload !== true) {
        return <h2>Loading...</h2>
    }

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
            <ul>
                {userList && userList.map((user, i) => {
                    return <li key={i}>{user.userName}</li>
                })}
            </ul>
        </>
    )
}
