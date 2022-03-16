export default function button(props){
    return(
        <>
            <button onClick={props.Onclick}>{props.children}</button>
        </>
    )
}