import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"

const h={
  textAlign:'center',
  marginTop: "20%",
  color: "cadetblue"

}

let currdate=new Date().getHours();
let grettings=''
let stylecss={}

if(currdate>=1&&currdate<12){
  grettings="Good Morning";
  stylecss.color="green"
}
else if(currdate>=12&&currdate<19)
{
  grettings="Good Evening";
  stylecss.color="Orange"
}

else{

  grettings="Good Night";
  stylecss.color="Red"

}

ReactDom.render(

  <>

  <div>

  <h1> Hello Sir, <span style={stylecss}>{grettings}</span> </h1>
  </div>


  



  </>,

  document.getElementById('root')
)

