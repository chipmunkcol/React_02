import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addBucket, addInput } from '../../store';


function Input ({id, setId, title, setTitle, content, setContent}) {

    const dispatch = useDispatch()

    return (
    <div style={{textAlign:'center'}}>
        <h4 style={{whiteSpace:'pre-line'}}>리덕스로 버킷리스트를 만들어보자! <br/></h4>

        <div> 
            제목<input value={title} onChange={(e)=>{ setTitle(e.target.value) }}></input>
            {/* 제목<input onChange={(e)=>{ dispatch(addInput(e.target.value)) }}></input> */}
            내용<input value={content} onChange={(e)=>{ setContent(e.target.value) }}></input>
            <button onClick={()=>{ 
            if(title === '' || content === '') {
                alert('1글자 이상 입력해주세요')
            } else {
                dispatch(addBucket({
                    id: id,
                    title: title,
                    content: content,
                    done: false
                }))
                setTitle('')
                setContent('')
                setId(id + 1)
                console.log(id)
            }
            }}>저장하기</button>
        </div>
     </div>
    );
}

export default Input;