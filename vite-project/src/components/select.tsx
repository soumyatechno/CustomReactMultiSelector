import styles from './select.module.css'
import { useState, useEffect } from 'react'

type SelectOptions =  {
  label : string
  value:  number | string | undefined
}

type SelectProps = {
  options : SelectOptions[]
  value : SelectOptions
  onChange : (value: SelectOptions | undefined) => void
}


export function Select ( {onChange, value, options}: SelectProps ) {

  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);

  function clearOptions(e){
    e.stopPropagation();
    onChange(undefined);
  }

  function selectOption(e, option: SelectOptions){
    e.stopPropagation();
    onChange(option);
    setOpen(false);
  }

  function isOptionSelected(option: SelectOptions){
    return option.value=== value?.value;
  }

  useEffect(()=>{
    setHighlightIndex(0);
  },[open])

  return (
    
    <div onClick={()=> {
      console.log()
      setOpen(prev => !prev)
    }
    }
    // onBlur={()=> {
    //   setOpen(false)
    // }}


    tabIndex={0} className={styles.container}>
       <span className={styles.value}>{value?.label}</span>
        <button className={styles["clear-btn"]}
        onClick={(e)=> clearOptions(e)}>
          &times;
        </button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${open ? styles.show : ""}`}>
          {options.map((option,index)=>{
            return(
            <li 
            onClick={(e)=> selectOption(e, option)}
            onMouseEnter={()=> {
              console.log('clicked',index)
              setHighlightIndex(index)}}
            key={option.label} 
            className={`${styles.option} 
            ${isOptionSelected(option) ? styles.selected : ""}
            ${ index === highlightIndex ? styles.highlighted : ""}
            `}
            >
              {option.label}
            </li>
            )
          })}
        </ul>
       
    </div>
    
  )

}