import React from 'react';

const Post = () => {
  return (
    <div>
      <div id="name">
        <p></p>
      </div>
      <div>
        <form className="comment" onSubmit="return false">
          <input type="text" className="commtext" placeholder="댓글달기..." />
          <button type="submit" className="commbtn">
            클릭
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
