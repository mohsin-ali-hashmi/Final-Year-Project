import styled from 'styled-components'


export const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #000d1a;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
      flex-direction:column;
  }
`;

export const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;
  padding:3px;
  @media screen and (max-width: 680px) {
    
    margin:0;
    padding:20px;
    
    flex-direction: column;
    
  }
`;

export const Slogan = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const StandoutImage = styled.div`
    
    
  
  
  width: 400px;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 680px) {
    
    width: 20em;
    height: 15em;
  }
`;