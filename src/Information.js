import React from 'react'



const Information = (props) => {
  console.log(props)
  return (

    <div className="container">
      <div className="cards">
      
        <h2>{props.title}</h2>
        <img src={props.imgsrc} />
      <div className="box">
      <h6 className='display-6'>{props.des}</h6>
<p className='lead'>Rose is the classic flower that symbolizes love, romance, and affection. As such, they are extremely popular and widely used for proposals. Rose is also connected with Aphrodite, the Greek goddess of beauty and love <br />
<button className='btn btn-info border-rounded-3'>{props.btn}</button></p>
<hr/>
      </div>
            
       
        </div>
      </div>


      )
}

      export default Information;