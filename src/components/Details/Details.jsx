import { useHistory } from "react-router-dom"
export default function Details(){
    const history = useHistory();
    const goHome = () =>{
        history.goBack();

    }

    return(
        <div data-testid="movieDetails">
        <h1>hi</h1>
        <button
        data-testid="toList"
        onClick={goHome}
        >back to movie list</button>
        </div>
    )

}