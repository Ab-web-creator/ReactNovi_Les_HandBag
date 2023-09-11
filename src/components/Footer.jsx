
function Footer(props) {

    return (
        <section>
            <img src={props.src} />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>
    )
}

export default Footer;