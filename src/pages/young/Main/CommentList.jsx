const CommentList = props => {
  const { userName, userComment } = props;
  return (
    <div className="userCommentBox">
      <p className="userName">{userName} </p>
      <div className="userComment"> {userComment} </div>
    </div>
  );
};

export default CommentList;
