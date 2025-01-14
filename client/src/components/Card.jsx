import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {

    const {name, id} = props.phone

  return (

    <Link to={`/${id}`} style={{textDecoration: "none"}}>
        <div className="list-group-item list-group-item-action list-group">
            <p style={{alignSelf: "center"}}>{name}</p>
        </div>
    </Link>

  )
}

export default Card