import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import { useAuth0 } from '@auth0/auth0-react';
import Col from 'react-bootstrap/Col';
import News from './ApiComponents/News';
import Post from './Posts/Post';
import Createpost from './Posts/Createpost';
import axios from 'axios';

export default function Home() {

  const [id, setId] = useState('');
  // const { user, isAuthenticated } = useAuth0();
  const user = {
    userFullName: "abd",
    email: "test65@example.com"
  }

  const addUsers = async () => {
    const axiosData = await axios.post('https://blog-post-back-end.vercel.app/addUsers', user);
    const data = axiosData.data;
    setId(data[0].userid)
    // setUserData(data[0].userid);
  }

  useEffect((e) => {
    addUsers(e);
  }, [])
  
  return (
    <>
      <Row className='mx-4 my-4'>
        <Col xs={3}>
          <div className='news'>
            <News />
          </div>
        </Col>
        <Col xs={6}>
          <Createpost id={id} />
          <Post />
        </Col>
      </Row>
    </>
  )
}