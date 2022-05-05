import styled from 'styled-components'

export const SearchField = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  align-items: center;

  input {
    background-color: black;
    color: white;
    outline: none;
    border: 4px solid rgb(18, 101, 255);
    border-radius: 10px;
    padding: 10px;
    height: 50px;
    font-size: 1.6rem;
    width: 50%;
  }

  @media (max-width: 650px) {
      flex-direction: column;
      justify-content: center;

      input{
        width: 300px;
        margin-bottom: 10px;
      }
  }
`

export const Back = styled.button`
  font-size: 1.6rem;
  color: white;
  margin-left: 15px;
  width: 150%;
  height: 50px;
  background: none;
  border: 4px solid rgb(18, 101, 255);
  border-radius: 10px;
  transition: all ease 0.5s;

  :hover {
    cursor: pointer;
    border: 4px solid rgb(111, 161, 255);
    background-color: rgb(111, 161, 255);
  }

  @media (max-width: 650px) {
   margin-left: 0;
   width: 300px;

  }
`