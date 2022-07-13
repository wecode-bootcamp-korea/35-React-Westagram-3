import React, { useState } from 'react';

const Post = ({ name }) => {
  const [commit, setCommit] = useState(''); //사용자가 입력한 댓글
  const [disable, setdisable] = useState(true); //댓글 게시 가능 여부
  const [feedComments, setFeedComments] = useState([]); //댓글 리스트 담기

  //사용자가 입력하고 있는 입력값 저장
  const inputText = e => {
    setCommit(e.target.value);
  };

  // 댓글 게시 가능 여부
  const commitText = e => {
    e.target.value.length > 0 ? setdisable(false) : setdisable(true);
  };

  //게시 버튼 클릭시 발생하는 이벤트
  const postBtn = e => {
    e.preventDefault(); //기본클릭 동작 방지
    const copyFeed = [...feedComments]; //배열에 텍스트를 담고있기 때문에 문자를 추가하지 못한다?
    copyFeed.push(commit); // 댓글 추가하고
    setFeedComments(copyFeed); //변화된 값을 배열에 다시 담아준다?
    setCommit(''); //글 게시되면 input 텍스트 비워짐
  };

  return (
    <div>
      {feedComments.map((data, idx) => {
        return (
          <p key={idx}>
            {name}
            {data}
          </p>
        );
      })}
      <div>
        <form className="comment">
          <input
            type="text"
            className="commtext"
            placeholder="댓글달기..."
            onChange={inputText} //새로운 댓글
            onKeyUp={commitText} //댓글 가능 여부
            value={commit} // 사용자가 입력한 댓글
          />
          <button
            type="submit"
            className="commbtn"
            onClick={postBtn}
            disabled={disable ? true : false}
          >
            게시
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
