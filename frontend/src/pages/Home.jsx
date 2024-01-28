import { React, useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import Note from './Notes'
export default function Home() {

  const [notes, setnotes] = useState([])
  const getALLNOTES = () => {
    axios.get('http://localhost:1000/note/create').then((response) => {
      setnotes(response.data)
    }).catch((err) => {
      console.log(err)
    })

  }
  //delete data from api
  const deleteNote = (id) => {
    axios.delete(`http://localhost:1000/note/delete/${id}`).then((response) => {
      // console.log(response)
      alert('successfully deleted note ')
      getALLNOTES()
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    document.body.style.background = ""
    getALLNOTES()

  }, [])


  return (
    <div>
      <div>
        <Header />
        <div className=' grid grid-cols-[300px_300px_300px] justify-around mt-10 gap-2'>


          {/* getting  data from database */}

          {
            notes.map((note) => {
              return <Note id={note._id}
                handleDelete={() => deleteNote(note._id)}
                title={note.title} description={note.description} />
            })
          }
        </div>
      </div>
    </div>
  )
}
