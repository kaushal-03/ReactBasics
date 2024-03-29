import React from 'react'
import Card from "./Card";
function ErrorModal(props) {
  return (
    <Card>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>
            {props.message}
            </p>
        </div>
        <footer>
            <button>Okay.</button>
        </footer>
    </Card>
  )
}

export default ErrorModal