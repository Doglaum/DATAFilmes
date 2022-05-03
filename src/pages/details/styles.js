import styled from 'styled-components'

export const Text = styled.span`
  line-height: 100%;
  margin-bottom: 1rem;
  font-size: 130%;
  color: white;
`

export const Container = styled.div`
  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    background-color: #6c59e9c4;
    border-radius: 1rem;
  }

  img {
    width: 300px;
    border-radius: 1rem;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
  }

  .details h1 {
    margin-bottom: 1.5rem;
  }

  button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
  }

  button:hover {
    background-color: #5848c2;
  }

  .release-date {
    opacity: 0.5;
  }
`
