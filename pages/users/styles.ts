import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Navbar = styled.div`
  width: 100%;
  background-color: green;
  height: 3.4rem;
`;

export const ContentWrapper = styled.div`
  margin: 5rem auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ErrorWrapper = styled(ContentWrapper)`
  flex-direction: row;
`;

export const LoadingWrapper = styled(ContentWrapper)`
  flex-direction: row;
`;
