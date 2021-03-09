import React from 'react'

const Pokemon = () => {
  return (
    <div class="blog">
      <div class="title-box">
        <h3>Noko</h3>
        <hr />
        <div class="intro">Decription</div>
      </div>
      <div class="info">
        <span></span>
      </div>
      <div class="footer">
        <div class="icon-holder">
          <button className="btn-catch">Catch</button>
          <button className="btn-catch">Detail</button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon
