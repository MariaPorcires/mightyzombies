//HÄMTA LISTAN FRÅN REDUX-ARRAYEN
//import { userChoiceARRAY } from "../../reducers/addObjectReducer"

function UserchoiceITEM(props) {
    console.log(props.order)
    const {title, price} = props.order;
  return (
    <div>
        <article>
            <h1>{title}</h1> 
            <h2>{price}</h2>
        </article>
    </div>
  )
}

export default UserchoiceITEM