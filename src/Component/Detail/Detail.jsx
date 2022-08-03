import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'



function Detail() {

    const params = useParams().id
    // console.log(params)
    
    const navigate = useNavigate()
    
    const state = useSelector((state) => state)
    console.log(state.bucket)
    
    const a = state.bucket.findIndex((val)=> val.id === Number(params))
    console.log(params)   // params는 미친놈이다 숫자인척하는 문자이므로 조심 또 조심하자.
    console.log(a)
    

    
    return (
        <div className='detail'>
          <div style={{display:'flex', margin:'20px 0 0 0'}}>
            <p style={{textAlign:'initial', width: '76%', marginLeft:'37px'}}>ID: {params}</p>
            <button  onClick={()=>{ navigate('/') }}>이전으로</button>
          </div>
          
          <h1>Title: {state.bucket[a].title}</h1>
          <h2>Content: {state.bucket[a].content}</h2>
        </div>
    );
}


export default Detail;
