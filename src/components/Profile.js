import React, { useEffect, useState } from 'react';
import Createpost from './Posts/Createpost';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../profile.css'
import PostById from './Posts/PostByID';
import Profilecard from './Posts/Profilecard'

export default function Profile() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      {pageWidth > 1024 ?
        <Row className='mx-4'>
          <Col xs={3}>
            <Profilecard />
          </Col>
          <Col xs={6}>
            <br />
            <Createpost />
            <PostById />
          </Col>
          <Col xs={2}>
          </Col>
        </Row>
        :
        <Col xs={12}>
            <Profilecard />
            <br />
            <Createpost />
            <PostById />
        </Col>}
    </div>
  )
}