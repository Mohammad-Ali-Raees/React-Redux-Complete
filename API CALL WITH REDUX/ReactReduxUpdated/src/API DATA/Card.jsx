import React from 'react'

const Card = ({id,body,title}) => {
    return (
        <div className="card" style={{ width: '18rem',height:"300px",margin:"10px 0px" }}>
          
            <div className="card-body">
                <h5 className="card-title text-dark">{title}</h5>
                <p className="card-text text-dark">{body}</p>
             
            </div>
        </div>


  )
}

export default Card