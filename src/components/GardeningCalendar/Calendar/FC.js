import React from 'react';
import FlipCard from './FlipCard';
import './FC.css'

function FC({ monthName }) {
  return (
    <div className='mg_outer'>
      <div className="month-grid">
        <div className="month-row">
            <div className='jan-shell'>
          <FlipCard id='jan' name='January'/>
            </div>
            <div className='feb-shell'>
          <FlipCard id='feb' name='February' />
            </div>
            <div className='mar-shell'>
          <FlipCard id='mar' name='March' />
            </div>
            <div className='apr-shell'>
          <FlipCard id='apr' name='April' />
            </div>
        </div>
        <div className="month-row">
            <div className='may-shell'>
          <FlipCard id='may' name='May' />
            </div>
            <div className='jun-shell'>
          <FlipCard id='jun' name='June' />
            </div>
            <div className='jul-shell'>
          <FlipCard id='jul' name='July' />
            </div>
            <div className='aug-shell'>
          <FlipCard id='aug' name='August' />
            </div>
        </div>
        <div className="month-row">
            <div className='sep-shell'>
          <FlipCard id='sep' name='September' />
            </div>
            <div className='oct-shell'>
          <FlipCard id='oct' name='October' />
            </div>
            <div className='nov-shell'>
          <FlipCard id='nov' name='November' />
            </div>
            <div className='dec-shell'>
          <FlipCard id='dec' name='December' />
            </div>
        </div>
      </div>
    </div>
  );
}

export default FC;

