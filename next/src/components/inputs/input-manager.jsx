/* eslint-disable react/no-children-prop */
import String from "./string"
import Select from "./select"
import File from "./file"
import Number from "./number"


export default function InputManager ({input, formik}) { 

  switch (input.__component) {
    case 'inputs.string': return <String input={input} formik={formik}/>
    case 'inputs.select': return <Select input={input} formik={formik}/>
    case 'inputs.file': return <File input={input} formik={formik}/>
    case 'inputs.number': return <Number input={input} formik={formik}/>
  }
  
}