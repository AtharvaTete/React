import React, { useState } from 'react'

export default function 
(props) {

    // const [myStyle,setmystyle]=useState({
    //     backgroundColor:'black',
    //     color:'white'
    // })

    let myStyle={
        color:props.mode ==='dark'?'white':'#495057',
        backgroundColor:props.mode ==='dark'?'#495057':'white'
    }

    // const [btntext,setbtntext]=useState("Enable Dark Mode")

//    const toggleStyle=()=>{
//         if(myStyle.color == 'white')
//         {
//             setmystyle({
//                 backgroundColor:'white',
//                 color:'black'
//             })
//         }
//         else{
//             setmystyle({
//                 backgroundColor:'black',
//                 color:'white'
//             })
//         }
//     }

    // const toggleStyle=()=>{
    //     if(myStyle.color == 'white')
    //     {
    //         setmystyle({
    //             backgroundColor:'white',
    //             color:'black'
    //         });
    //         setbtntext("Enable Dark Mode")
    //     }
    //     else{
    //         setmystyle({
    //             backgroundColor:'black',
    //             color:'white'
    //         });
    //         setbtntext("Enable Light Mode")
    //     }
    // }
 
  return (
    <div className='container' style={myStyle}>
        <h3 className='my-3'>About Us</h3>
            <div class="accordion" id="accordionExample" style={myStyle}>
    <div class="accordion-item">
        <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
        <div class="accordion-body" style={myStyle}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div class="accordion-item" >
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
        <div class="accordion-body" style={myStyle}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="container">
    <div class="accordion-item" style={myStyle}>
        <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
    </div>
  </div>
  )
}
