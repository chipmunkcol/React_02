import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addInput, addBucket, delBucket, doneBucket, cancelBucket } from './store';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import Detail from './Component/Detail/Detail';
import Input from './Component/Main/Input';
import Working from './Component/Main/Working';
import Done from './Component/Main/Done';


function App() {


  let [id, setId] = useState(1)
  let [title, setTitle] = useState('')
  let [content, setContent] = useState('')


  useEffect(()=>{
    
    
  },[])


  return (
    <div className='App'>
      

      <Routes>

        <Route path='/' element={<>
          

            <Input id={id} setId={setId} title={title} setTitle={setTitle} content={content} setContent={setContent}/>
            

            <Working/>
            

            <Done/>

            
           </>}>
        </Route>
          
            <Route path='/detail/:id' element={<Detail/>}></Route>
      
      </Routes>


    </div>
  );
}




export default App;
