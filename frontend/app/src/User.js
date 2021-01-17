import React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';


const QUERY_USERS = gql`
query {
  users {
    id
    name
    lastName
  }
}
`;

const CREATE_USER = gql`
mutation createUser ($name: String!, $lastName: String!){
  createUser (name: $name, lastName: $lastName){
    id
    name
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

  return data?.users.map(({ id, name, lastName }) => (
    <div key={ id }>
      <p>
        User - { id }: { name } { lastName }
      </p>
    </div>
  ));
}

export function CreateUser() {

  let inputName, inputLastName;
  const [ createUser ] = useMutation(CREATE_USER);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createUser({ variables: {
              name: inputName.value,
              lastName: inputLastName.value 
          } });
          inputName.value = '';
          inputLastName.value = '';
          window.location.reload();
        }}
        style = {{ marginTop: '2em', marginBottom: '2em' }}
      >
        <label>Name: </label>
        <input
          ref={node => {
            inputName = node;
          }}
          style={{ marginRight: '1em' }}
        />

        <label>Last Name: </label>
        <input
          ref={node => {
            inputLastName = node;
          }}
          style={{ marginRight: '1em' }}
        />
        <button type="submit" style={{ cursor: 'pointer' }}>Add a User</button>
      </form>
    </div>
  );

}
