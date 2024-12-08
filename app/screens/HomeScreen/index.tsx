import dayjs from 'dayjs';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../assets';
import {colors} from '../../constants';
import {PRIORITY} from '../../constants/todo';
import {useAppDispatch, useAppSelector} from '../../duck/hooks';
import {addTodo, editTodo, setEditId} from '../../duck/reducers/app';
import {TodoProps} from '../../duck/reducers/app.type';
import {uuid} from '../../utils';
import {Header, TodoItem} from './components';
import {styles} from './styles';

const HomeScreen = () => {
  const todos = useAppSelector(state => state.app.todos);
  const edittingId = useAppSelector(state => state.app.edittingId);
  const dispatch = useAppDispatch();

  const toggleDone = (item: TodoProps) => {
    dispatch(editTodo({...item, isDone: !item.isDone}));
  };

  const onEdit = (id: string) => {
    dispatch(setEditId(id));
  };

  const renderItem = ({item}: {item: TodoProps}) => (
    <TodoItem
      data={item}
      toggleDone={toggleDone}
      onEdit={onEdit}
      edittingId={edittingId}
    />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  useEffect(() => {
    dispatch(
      addTodo({
        id: uuid(),
        deadline: dayjs().endOf('day').format(),
        isDone: false,
        name: 'Buy breakfast',
        priority: PRIORITY.medium,
      }),
    );
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.yellow1} barStyle="light-content" />
      <Header />
      <FlatList
        data={todos}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        style={styles.list}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tạo task mới</Text>
        <Image source={images.addIcon} width={12} height={12} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
