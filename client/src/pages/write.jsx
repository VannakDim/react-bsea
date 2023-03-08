import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import axios from 'axios'
import 'react-quill/dist/quill.snow.css'
import { useLocation, useNavigate } from 'react-router-dom'


const Write = () => {

  const navigate = useNavigate()
  const state = useLocation().state
  const [desc, setDescription]= useState(state?.description || "");
  const [about, setAbout]= useState(state?.about || "");
  const [icon, setIcon]= useState(state?.icon || "");
  const [cls, setClass]= useState(state?.class || "");
  
  const handleClick = async e =>{
    e.preventDefault()
    try {
      state 
        ? await axios.put(`/about/${state.id}`,{
          about,
          description: desc,
          icon,
          cls,
      })
        : await axios.post(`/about/`,{
          about,
          description: desc
        })
        navigate("/about")
    } catch (err) {
      console.log(err);
    }
  }
  // console.log(desc);
  return (
    <div className="add">
      <div className="content">
        <h1>Update</h1>
        <input type="text" value={about} placeholder='About' onChange={e=>setAbout(e.target.value)}/>
        <input type="text" value={icon} placeholder='icon' onChange={e=>setIcon(e.target.value)}/>
        <input type="text" value={cls} placeholder='Class' onChange={e=>setClass(e.target.value)}/>
        <div className='editorContainer'>
          <ReactQuill className='editor' theme="snow" value={desc} onChange={setDescription} />
      </div>
      <div className="menu">
        <div className="item">
            <a className='btn btn-success rounded-pill py-3 px-5 mt-2' onClick={handleClick}>Publish</a>
            <a className='btn btn-info bg-dark text-white rounded-pill py-3 px-5 mt-2' href='/about'>Back</a>
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default Write