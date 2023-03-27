import { useState, useEffect } from 'react';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalProfile from '../Posts/ModelProfile';
import axios from 'axios';

export default function Profilecard(props) {
  const [updateUser, setupdateUser] = useState([]);
 // const id = props.id;
  //console.log(props.id);
  //const [updateUserInfo, setupdateUserInfo] = useState([]);
  const user = {
    name: "Name",
    email: "user42@example.com"
  };

  const [showFlag, setShowFlag] = useState(false);
  //const [clickedUser,setClickedUser]= useState({});

  const handleShow = () => {
    // setClickedUser(updateUser);

    setShowFlag(true);

  }
  const handleClose = () => {
    setShowFlag(false);

  }
  const takeNewArrFromChild = (user) => {
    // console.log("parent Comp",arr);
    // props.takeNewArr(arr);
    setupdateUser(user);
  }

  useEffect(() => {
   
  }, [updateUser]);
  props.setUserData(updateUser);

  return (
    <div>
      <Card className='my-4' sx={{ maxWidth: 345 }}>
        <img
          component='img'
          alt='green iguana'
          height='140'
          src={props.pic}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Bio: {props.bio}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Date of birth: {props.dob}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' onClick={handleShow}>
            Edit
          </Button>
        </CardActions>
      </Card>
      <ModalProfile  id={props.id} takeNewArrFromChild={takeNewArrFromChild} showFlag={showFlag} handleClose={handleClose} setupdateUser={setupdateUser}/>
    </div>
  );

}