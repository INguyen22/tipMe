import React from "react"
import "./Form.css"

const Form = () => {
    return (
        <form className="form">
            <div className="inputContainer">
                <input className="inputButton" type="button" value="25%"/>
                <input className="inputButton" type="button" value="50%"/>
                <input className="inputButton" type="button" value="75%"/>
                <input className="inputButton" type="button" value="100%"/>
            </div>
            <textarea rows="4" cols="70" name="comment">Comment here :D</textarea>
            <button>Submit</button>
        </form>
    )
}

export default Form