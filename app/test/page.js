'use client'
import React from 'react'

export default function Test() {
    return <div style={outer}>
        <div style={headline}>I scored</div>
        <div style={score}>23</div>
        <div style={gradientCircle}/>
        <div style={cta}>PLAY NOW</div>
  </div>
}

const outer = {
    background: '#333333',
    color: '#FFFFFF',
    width: '1200px',
    maxWidth: '1200px',
    height: '630px',
    maxHeight: '630px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center'
  };
  const gradientCircle = {
    position: 'absolute',
    left: '-150px',
    top: '383px',
    width: '1500px',
    height: '1500px',
    borderRadius: '1500px',
    background: 'linear-gradient(90deg, #8A2387 14.27%, #E94057 48.78%, #F27121 86.52%)'
  };
  const headline = {
    fontSize: '48px',
    fontFamily: 'VideoLight'
  }
  const score = {
    top: '45px',
    fontSize: '300px',
    fontFamily: 'VideoBold',
  };
  const cta = {
    bottom: '55px',
    fontSize: '80px',
    fontFamily: 'VideoLight'
  }
  
  const headlineContainer = {
    position: 'absolute',
    left: '0px',
    top: '22px',
    width: '100%',
    display: 'flex',
    
  }