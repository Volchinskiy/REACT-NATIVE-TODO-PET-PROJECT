import
TodoAddPageButton
  from '../../components/TodoAddPageComponents/TodoAddPageButton';
import
TextInputWrapper
  from '../../components/TodoAddPageComponents/TextInputWrapper';
import
{ TextInputData }
  from '../../components/TodoAddPageComponents/TextInputData';
import { SimpleLineIcons } from '@expo/vector-icons';
import TodoService from '../../servise/TodoService';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleVariable } from '../StyleVariables';
import { CheckBox } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

interface Iitem {
item: {
  _id: string;
  tittle: string;
  text: string;
  public: boolean;
  completed: boolean;
  date: string;
  };
}

export default function TodoPostListItem( { item }: Iitem) {
  const [isEdit, setEdit] = React.useState<boolean>(false);
  console.log(item);

  interface Idata {
  tittle: string;
  text: string;
  public: boolean;
  }

  const renderItem = {
    id: item._id,
  };
  const editPage = () => {
    setEdit(!isEdit);
  };

  const deleteTodo = (id: string) => {
    TodoService.deletTodo(id);
    window.location.reload();
  };

  const editTodo = async (values: Idata, id: string) => {
    await TodoService.editTodo(values, id);
    return (window.location.pathname = '/');
  };

  const initialValues = {
    tittle: item.tittle,
    text: item.text,
    public: false,
    completed: false,
  };

  const shema = Yup.object().shape({
    tittle: Yup.string().required().default('').min(5),
    text: Yup.string().required().default('').min(10),
  });

  return (
    <View style={styles.flatListContentWrapper}>
      { isEdit ?
      <View style={styles.flatListLeftSide}>
        <Formik
          initialValues={initialValues}
          validationSchema={shema}
          onSubmit={(values) => editTodo(values, renderItem.id)}>
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
                <CheckBox
                  checkedIcon="check-box"
                  iconType="material"
                  uncheckedIcon="check-box-outline-blank"
                  title="Completed"
                  checkedTitle="Completed"
                  checked={formik.values.completed}
                  onPress={() =>
                    formik.setFieldValue('completed', !formik.values.completed)}
                />
              </View>
              <TodoAddPageButton title='Chenge' submit={handleSubmit} />
            </>
          )}
        </Formik>
      </View> :
      <View style={styles.flatListLeftSide}>
        <View style={styles.flatListTittle}>
          <Text style={styles.flatListTittleText}>{item.tittle}</Text>
          <Text style={styles.flatListDateText}>{item.date.slice(0, 4)}</Text>
        </View>
        <View>
          <Text style={styles.flatListText}>{item.text}</Text>
        </View>
        <View style={styles.flatListState}>
          <Text style={styles.flatListStateText}>
            {item.completed ? 'Completed,' : 'Not completed,'}
          </Text>
          <Text style={styles.flatListStateText}>
            {item.public ? 'Public' : 'Private'}
          </Text>
        </View>
      </View>}

      <View style={styles.flatListRightSide}>
        <TouchableOpacity>
          <SimpleLineIcons
            onPress={editPage}
            name="pencil"
            size={30}
            color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            onPress={() => deleteTodo(renderItem.id)}
            name="delete"
            size={40}
            color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContentWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    minHeight: 190,
    marginBottom: StyleVariable.padding1,
  },
  flatListLeftSide: {
    width: '79%',
    padding: StyleVariable.padding1,
    borderRadius: 20,
    backgroundColor: StyleVariable.color4,
  },
  flatListRightSide: {
    width: '20%',
    maxHeight: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: StyleVariable.padding4,
    borderRadius: 20,
    backgroundColor: StyleVariable.color4,
  },
  flatListTittle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: StyleVariable.padding1,
  },
  flatListTittleText: {
    fontSize: StyleVariable.fontSize5,
    fontWeight: 'bold',
    marginRight: 20,
    maxWidth: 200,
  },
  flatListDateText: {
    fontSize: StyleVariable.fontSize5,
    fontWeight: 'bold',
    maxWidth: 50,
  },
  flatListText: {
    fontSize: StyleVariable.fontSize5,
    marginBottom: StyleVariable.padding1,
  },
  flatListState: {
    flexDirection: 'row',
  },
  flatListStateText: {
    fontSize: StyleVariable.fontSize5,
    fontWeight: 'bold',
    marginRight: StyleVariable.padding1,
  },
});
