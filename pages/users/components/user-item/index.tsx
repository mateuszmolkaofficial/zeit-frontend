import React from 'react';
import { User } from '../..';
import { StyledCard } from './styles';
import Typography from '@material-ui/core/Typography';

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <StyledCard variant="outlined">
      <Typography variant="h5" gutterBottom>
        {user && user.nickName}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {user && user.smartText}
      </Typography>
    </StyledCard>
  );
};

export default UserItem;
