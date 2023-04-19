const Button = (props: any) => {

    return (
        <>
            <button 
                 onClick={e =>  props.click && props.click(props.function)}
            >{props.name}</button>
        </>
    )
}
export default Button;