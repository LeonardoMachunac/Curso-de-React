import { useEffect, useState } from "react"

export function MovieCard(){
        const[movies,SetMovies] = useState([])
        useEffect(()=>{
            get()
        })




    return(<h1>Movie Card</h1>)
}