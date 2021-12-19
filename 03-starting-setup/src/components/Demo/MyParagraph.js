const MyParagraph = (props) => {
  console.log('MyParagraph runnung');
  return (
    <p>{props.children}</p>
  )
};

export default MyParagraph;