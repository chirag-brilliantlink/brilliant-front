import styled from "styled-components";

export default function PostCard(props: { title: string; body: string }) {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 10px;
  margin: 10px;
  /* width: 200px; */
  /* height: 150px; */
  background-color: #fad5d2;
  border: 0.1px dashed gray;
`;
