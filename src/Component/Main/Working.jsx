import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addInput, addBucket, delBucket, doneBucket, cancelBucket } from '../../store';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'


function Working() {

    const dispatch = useDispatch()

    const state = useSelector((state)=>state)

    const navigate = useNavigate()



    return(
        <Container>
              <h4 style={{marginTop:'20px'}}>Working!💣</h4>
                <Row xs={1} md={3} style={{display:'flex'}}>
                  {
                      state.bucket.map((val, i) => {
                        if(val.done === false) {
                          return (
                              <Col className='list' key={i} >
                               
                                <div onClick={()=>{ navigate('/detail/'+val.id) }} style={{color:'red'}}>상세보기</div>

                                <h2>{val.title}</h2>
                                <p>{val.content}</p>
                                <button onClick={()=>{ 
                                  dispatch(doneBucket(val.id))
                                }}>완료</button>
                                <button onClick={()=>{
                                  dispatch(delBucket(val.id))
                                }}>삭제</button>
                              </Col>
                      )}  
                    })
                  }
                </Row>
        </Container>
    );
}


export default Working