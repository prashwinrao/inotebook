import React from 'react'

function Notesitem(props) {
    const {note}=props
  return (
      <div className="col-md-3">
    <div class="card my-3">
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description} lorem30 </p>
    
  </div>
</div>
</div>
  )
}

export default Notesitem