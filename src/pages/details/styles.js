import styled from 'styled-components'

export const Text = styled.span`
  line-height: 100%;
  margin-bottom: 1rem;
  font-size: 130%;
  color: white;
`

export const Container = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img{
    width: auto;
    max-width: 600px;
    border-radius: 1rem;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  img::before{
    content: "a";
    width: 150px;
    height: 150px;
    background-color: red;
    font-size: 50px;
    color: red;
    background: red;
    left: 0;
  }


  .movie {
    margin-left: auto;
    margin-right: auto;
    background-color: #6c59e9c4;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 15px;
    max-width: 600px;
  }

  .details h1 {
    margin-bottom: 1.5rem;
  }

  .release-date {
    opacity: 0.5;
  }

  @media (max-width:650px){
    img {
      width: 300px;
    }
  }

`

export const Back = styled.button`
  
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
  

 :hover {
    background-color: #5848c2;
  }
`

export const ContainerImg = styled.div`
  position: relative;

  ::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
background: linear-gradient(183deg, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2665441176470589) 45%, rgba(0,0,0,0.46262254901960786) 80%);
  }
`
