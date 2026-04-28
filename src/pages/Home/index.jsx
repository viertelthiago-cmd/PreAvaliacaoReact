import { Link } from "react-router-dom";
import '/style.css'

function Home() {
   return(
       <>
           <h2>Bem-Vindo(a) ao sistema de atividade </h2>
           <Link to="Ex01">
              <button>Ex01</button>
           </Link>
           <Link to="Ex02">
             <button>Ex02</button>
           </Link>
       
       
       </>
   )
}
export default Home