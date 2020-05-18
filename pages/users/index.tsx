import React from 'react';
import useFetch from 'use-http';
import ClipLoader from 'react-spinners/ClipLoader';
import { map } from 'lodash/fp';
import {
  Wrapper,
  Navbar,
  ContentWrapper,
  ErrorWrapper,
  LoadingWrapper,
} from './styles';
import UserItem from './components/user-item';

export interface User {
  id: string;
  nickName: string;
  smartText: string;
}

const UsersPage = () => {
  const { data, loading, error } = useFetch<User>(
    'https://zeit-serverless.molkamateuszjanusz.now.sh/api/users',
    {},
    [],
  );

  return (
    <Wrapper>
      <Navbar />
      {error && <ErrorWrapper>Something went wrong...</ErrorWrapper>}
      {loading && (
        <LoadingWrapper>
          <ClipLoader size={150} />
        </LoadingWrapper>
      )}
      {data && (
        <ContentWrapper>
          {map(
            (user) => (
              <UserItem key={`user-item-${user.id}`} user={user} />
            ),
            data,
          )}
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default UsersPage;
