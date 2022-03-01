import styled from "styled-components";
   
import { useEffect } from "react";
import { authentification } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
  } from "../features/user/userSlice";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { getAuth, signOut } from "firebase/auth";

import React from 'react';

const Navbar = (props) => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const userName = useSelector (selectUserName);
     const userPhoto = useSelector (selectUserPhoto);

     useEffect(() => {
        authentification.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            navigate("/home");
          }
        });
      }, [userName]);

    //  const signInWithGoogle = () => {
    //  const provider = new GoogleAuthProvider();
    //  signInWithPopup(authentification , provider)
    //  .then((result)=>{
        
    //      setUser(result.user);
    //  })
    //  .catch((err) => {
    //      console.log(err);
    //  })
    // };

    const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL, 
          })
        );
      };


    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope("profile");
        provider.addScope("email");
        if (!userName) {
          const result = await signInWithPopup(authentification , provider);
          setUser(result.user).catch((error) => {
            //   console.log(error)
            alert(error.message);
          });
          console.log(result);
        } else if (userName) {
          authentification
            .signOut()
            .then(() => {
              dispatch(setSignOutState());
              navigate("/");
            })
            .catch((error) => {
              alert(error.message);
            });
        }
      };
    
    return(
    <Nav>
         <Logo>
             <img src="/images/logo.svg" alt="logo"></img>
         </Logo>

         {!userName ? (
        <Login onClick={handleAuth}>Connexion</Login>
      ) : (
        <>

         <NavMenu>
            <a href="/home">
                <img src="/images/home-icon.svg" alt="homeicon"></img>
                <span>ACCUEIL</span>
            </a>
           
            <a href="/recherche">
                <img src="/images/search-icon.svg" alt="search"></img>
                <span>RECHERCHE</span>
            </a>
           
            <a href="/liste">
                <img src="/images/watchlist-icon.svg" alt="homeicon"></img>
                <span>MA LISTE</span>
            </a>
            
            <a href="/original">
                <img src="/images/original-icon.svg" alt="homeicon"></img>
                <span>ORIGINAL</span>
            </a>
            
            <a href="/films">
                <img src="/images/movie-icon.svg" alt="homeicon"></img>
                <span>FILMS</span>
            </a>
           
            <a href="/series">
                <img src="/images/series-icon.svg" alt="homeicon"></img>
                <span>SERIE</span>
            </a>
            
         </NavMenu>
         <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Déconnexion</span>
            </DropDown>
          </SignOut>
        </>
      )}
    
    </Nav>

    )

};

const Nav = styled.nav`
position: fixed;
top:0;
right:0;
left:0;
height: 72px;
background-color: #090b13;
display:flex;
justify-content: space-between;
align-items: center;
padding:0 36px;
letter-spacing: 10px;
z-index:3;
`;


const Logo = styled.a`
padding:0;
width:88px;
margin-top:4px;
max-height:70px;
font-size:0;
display: inline-block;
img {
    display: block;
    width: 100%;
}
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;


  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 10px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media ( max-width: 768px) {
    span {
        display:none;
    }
`;

const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 12px ;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 3px;
transition: all 0.2s ease 0s;

&:hover{
    background-color: #f9f9f9;
    color: black;
}
`

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      padding-right: 100px;
      font-size: 10px;
      height: 20vh
    }
  }
`;

export default Navbar;