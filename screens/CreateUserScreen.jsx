import React from 'react'

import styled from 'styled-components/native'

import CreateUserForm from '../components/CreateUserForm'

const StyledScrollView = styled.ScrollView`
  flex: 1;
  padding: 35px;
`

const CreateUserScreen = () => {
  return <CreateUserForm />
}

export default CreateUserScreen
