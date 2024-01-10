import React , {useState, useEffect} from 'react'
import  '../styles/Login.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const AddFriend = ({liste ,setListe}) => {

  const [friendData , setFriendData ] = useState({
    name: '',
    email : ''
  });

  const history = useHistory('/');

  const handleSubmit = (e) => {
    e.preventDefault();
    setListe([...liste ,friendData]);
    setTimeout(() => {
      history.push('/friendList');
    },1000);
  }

  useEffect (() => {
    console.log('friendData : ',friendData);
  },[friendData])

  return (
    <>
     <div className="login">
      <div className="form">
        <h2>ADD FRIEND</h2>
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">
              FRIEND NAME
            </label>
            <input
              type="text"
              id="username"
              onChange={ (e) => setFriendData({...friendData, name : e.target.value})}
            />
          </div>
          <div className="email">
            <label htmlFor="email">
              FRIEND EMAIL
            </label>
            <input
              type= 'email'
              id="password"
              onChange={(e) => setFriendData({...friendData, email : e.target.value})}
            />
          </div>
          <button type="submit" className="login-submit">SUBMIT</button>
        </form>
      </div>
    </div>
    </>
    
  )
}
export default AddFriend;
