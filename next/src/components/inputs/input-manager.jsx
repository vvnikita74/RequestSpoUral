import String from "./string"



export default function InputManager ({input, formik}) { 

  switch (input.__component) {
    case 'inputs.string': return <String input={input} formik={formik}/>
  }
  

}