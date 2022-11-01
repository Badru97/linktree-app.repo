import React from "react"
import "./Link.css"

const Link =() => {
  return(
    <React.Fragment>
    <a href="https://twitter.com/LukmanBadru">Twitter Link</a>
    <a href="https://training.zuri.team/" id="btn_zuri">Zuri Team</a>
    <a href="https://books.zuri.team/" id="books">Zuri Books</a>
    <a href="https://books.zuri.team/python-for-beginners?ref_id=
       <Badru>" id="book_python">Python Books</a>
    <a href="https://background.zuri.team/" id="pitch">Background Check for Coders</a>
    <a href="https://books.zuri.team/design-rules" id="book_design">Design Books</a>
    
    </React.Fragment>
  )
}

export default Link;