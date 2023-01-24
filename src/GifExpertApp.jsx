
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch'])

  const handleAdd = (newValue)=> {

    if (categories.includes(newValue)) return;

    setCategories([newValue,...categories]);
  }

  return (
    <>
    
    <h1> GifExpertApp </h1>

    <AddCategory 
    onNewCategorie = {value => { handleAdd(value) }}
    />
        {categories.map( category =>(  
            <GifGrid 
              key={category} 
              category={category}/>
        ))
        }
    </>
  )
}

