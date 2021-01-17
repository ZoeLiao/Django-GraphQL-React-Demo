import React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';


const QUERY_USERS = gql`
query {
  users {
    id
    firstName
    lastName
  }
}
`;

const CREATE_USER = gql`
mutation createUser ($firstName: String!, $lastName: String!){
  createUser (firstName: $firstName, lastName: $lastName){
    id
    firstName
    lastName
  }
}
`;


export function UserInfo() {

  // Polling: rovides near-real-time synchronization with your server
  // by causing a query to execute periodically at a specified interval
  const { data, loading } = useQuery(QUERY_USERS, { pollInterval: 500 });
  // should handle loading status
  if (loading) return <p>Loading...</p>;

  return data?.users.map(({ id, firstName, lastName }) => (
    <div key={ id }>
      <p>
        User - { id }: { firstName } { lastName }
      </p>
    </div>
  ));
}

export function CreateUser() {

  let firstName, lastName;
  const [ createUser ] = useMutation(CREATE_USER);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createUser({ variables: {
              firstName: firstName.value,
              lastName: lastName.value
          } });
          firstName.value = '';
          lastName.value = '';
          window.location.reload();
        }}
        style = {{ marginTop: '2em', marginBottom: '2em' }}
      >
        <label>First Name: </label>
        <input
          ref={node => {
            firstName = node;
          }}
          style={{ marginRight: '1em' }}
        />

        <label>Last Name: </label>
        <input
          ref={node => {
            lastName = node;
          }}
          style={{ marginRight: '1em' }}
        />
        <button type="submit" style={{ cursor: 'pointer' }}>Add a User</button>
      </form>
    </div>
  );

}
