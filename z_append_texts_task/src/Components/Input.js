import React from 'react'

export default function Input({labelText,onChange,cleardata}) {
  return (
    <div>
        <label htmlFor="" data-testid="label" >{labelText}</label>
        <input htmlFor="" data-testid="input" onFocus={cleardata} onChange={onChange} ></input>
    </div>
  )
}
