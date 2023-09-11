import {inventory} from "../assets/inventory.js";

function BagCard() {
   const bagCards = inventory.map((check) => {
        return (
            <article key={check.name}>
                <span> {check.label} </span>
                <img src={check.sourceImg} />
                <p>{check.name}</p>
                <h4>€{check.price},-</h4>
            </article>
        )
    })

    return (
        <main> {bagCards}</main>
    )
}

export default BagCard;