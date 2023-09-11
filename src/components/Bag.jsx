function Bag(props) {
    const doSomething = () => {
        if (props.title === "to the collection") {
            console.log("Clicked 1st btn")
        }
        if (props.title === "shop all bags") {
            console.log("Clicked 2nd btn")
        }
        if (props.title === "pre-orders") {
            console.log("Clicked 3d btn")
        }
    }

    return (

        <button
            disabled={props.disabled}
            onClick={doSomething}>

            {props.title}
        </button>
    )
}

export default Bag;