import
TodoAddPageButton
  from '../components/TodoAddPageComponents/TodoAddPageButton';
import
TextInputWrapper
  from '../components/TodoAddPageComponents/TextInputWrapper';
import
{ TextInputData }
  from '../components/TodoAddPageComponents/TextInputData';
import TodoService from '../servise/TodoService';
import { CheckBox } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const initialValues = {
  tittle: '',
  text: '',
  public: false,
};

const shema = Yup.object().shape({
  tittle: Yup.string().required().default('').min(5),
  text: Yup.string().required().default('').min(10),
});

export default function TodoAddPage() {
  const submit = async (values: object) => {
    await TodoService.createToDo(values);
    return (window.location.pathname = '/');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={shema}
        onSubmit={submit}>
        {({ handleSubmit, ...formik }) => (
          <>
            <View>
              {TextInputData.map(({ name, label }) => (
                <TextInputWrapper
                  error={false}
                  name={name}
                  key={name}
                  helperText={label}
                  {...formik}
                />
              ))}
            </View>
            <View>
              <CheckBox
                checkedIcon="check-box"
                iconType="material"
                uncheckedIcon="check-box-outline-blank"
                title="Public"
                checkedTitle="Public"
                checked={formik.values.public}
                onPress={() =>
                  formik.setFieldValue('public', !formik.values.public)}
              />
            </View>
            <TodoAddPageButton title='Create' submit={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
  },
});
