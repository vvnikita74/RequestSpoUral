/* eslint-disable react/no-children-prop */
import String from "./string"



export default function InputManager ({input, formik, children}) { 

  switch (input.__component) {
    case 'inputs.string': return <String input={input} formik={formik} children={children}/>
  }
  

}