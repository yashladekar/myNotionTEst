import React from 'react'

function textComponent() {
    const[inputData,setInputData]=React.useState("")
    const handleInput = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputData(e.target.value)
    }

  return (
    <div>
        <textarea onChange={handleInput}>
            {inputData}
        </textarea>
    </div>
  )
}

export default textComponent