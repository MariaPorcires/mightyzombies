//HÄMTA LISTAN FRÅN REDUX-ARRAYEN
//import { userChoiceARRAY } from "../../reducers/addObjectReducer"

function UserchoiceITEM(props) {
    console.log(props.order)
    const {name, price} = props.order;
  return (
    <div>
        <article>
            <h1>{name}</h1> 
            <h2>{price}</h2>
        </article>
    </div>
  )
}

export default UserchoiceITEM