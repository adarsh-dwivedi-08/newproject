import React, { useContext } from "react";
import { data,data01 } from "./App";
function ChildC(){
    const name=useContext(data);
    const gender=useContext(data01)
return(
    <h1> my name is {name} and my gender is {gender}</h1>
/* <div>
<data.Consumer>
    {
        (name)=>{
            return(
                <data01.Consumer>
                {
                    (gender)=>{
                        return(
                            <h1>my name is {name} and my gender is {gender}</h1>
                        )
                    }
                }
                </data01.Consumer>
            )
        }
    }
</data.Consumer>
</div> */
)
}
export default ChildC;