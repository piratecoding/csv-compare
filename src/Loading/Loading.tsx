import React from 'react';
import LoadingGif from '../Assets/loading.gif';
import './Loading.css';

export function Loading() {
  return (
    <div className='loading'>
      <img src={LoadingGif} alt='loading' height='40px' width='40px' />
    </div>
  );
}