
import React from 'react'

function Add1(props) {
    console.log(props.data.button);
    return <>
        
        <div className="container">

            {/* <!-- Project One --> */}
            <div className="row">
                <div className="col-md-7">
                    <a href="Javascript(void)">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="https://via.placeholder.com/700x300" alt="" />
                    </a>
                </div>
                <div className="col-md-5">
                    <h3>{props.data.projectName}</h3>
                    <p>{props.data.content}</p>
                    
                    <a className={`btn btn-${props.data.button}`} href="Javascript(void)">View Project</a>
                </div>
            </div>
        </div>
        
    </>
}

export default Add1