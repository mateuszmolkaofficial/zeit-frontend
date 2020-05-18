import Card from '@material-ui/core/Card';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  && {
    padding: 1.6rem 2rem;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
