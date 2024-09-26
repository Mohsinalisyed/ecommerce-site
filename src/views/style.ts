import styled from 'styled-components';

export const Heading = styled.h1`
  color: #343434;
  font-family: OpenSans-Bold;
  font-weight: 600;
  font-size: 24px;
  line-height: 32.68px;
  margin-bottom: 64px;
`;
export const CartWrapper = styled.div`
  max-width: 1574px;
  height: auto;       
  min-height: 757px;  
  margin:0 auto ; 
  border-radius: 24px;   
  padding: 24px;     
  display: flex;     
  justify-content:space-between;   
  gap: 40px;            
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  background:#ffffff;
  margin-top:40px;
    @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const AddToCartWrapper = styled.div`
  width:100%;
  max-width: 1088px;             
  height: auto;            
  max-height: 168px;      
  border-radius: 16px;        
  border: 1px solid #f2f2f2; 
  display: flex;              
  justify-content: space-between;
  align-items:center;
  padding: 24px;     
  margin-bottom:24px;       
`;
export const ImageWrapper = styled.div`
  width: auto;             
  height: auto;           
  max-width: 120px;   
  max-height: 120px;    
  border-radius: 16px;    
  padding: 10px;          
  display: flex; 
  justify-content:center;
  align-items:center;   
  gap: 10px;
  background: #F2F2F2;
`;
