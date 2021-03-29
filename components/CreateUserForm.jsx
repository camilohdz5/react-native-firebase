import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { Formik } from 'formik'

import styled from 'styled-components/native'

const StyledScrollView = styled.ScrollView`
  flex: 1;
  padding: 35px;
`
const StyledView = styled.View`
  flex: 1;
  padding: 0;
  margin-bottom: 35px;
  border-bottom-width: 1;
`

const CreateUserForm = () => (
  <Formik
    initialValues={{ name: '', email: '', phone: '' }}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <StyledScrollView>
        <StyledView>
          <TextInput
            placeholder='Name'
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
        </StyledView>
        <StyledView>
          <TextInput
            placeholder='Email'
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
        </StyledView>
        <StyledView>
          <TextInput
            placeholder='Phone'
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
          />
        </StyledView>
        <StyledView>
          <Button onPress={handleSubmit} title='Create' />
        </StyledView>
      </StyledScrollView>
    )}
  </Formik>
)

export default CreateUserForm
