import React, {useCallback, useState} from 'react';
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
import {useAppDispatch, useAppSelector} from '../../duck/hooks';
import {editTodo, setEditId} from '../../duck/reducers/app';
import {TodoProps} from '../../duck/reducers/app.type';
import {AddTodo, Header, TodoItem} from './components';
import {styles} from './styles';

const HomeScreen = () => {
  const todos = useAppSelector(state => state.app.todos);
  const edittingId = useAppSelector(state => state.app.edittingId);
  const dispatch = useAppDispatch();
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const toggleDone = useCallback(
    (item: TodoProps) => {
      dispatch(editTodo({...item, isDone: !item.isDone}));
    },
    [dispatch],
  );

  const showAddTodo = () => {
    setShowAdd(true);
  };

  const hideAddTodo = () => {
    setShowAdd(false);
  };

  const onEdit = useCallback(
    (id: string) => {
      dispatch(setEditId(id));
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({item}: {item: TodoProps}) => (
      <TodoItem
        data={item}
        toggleDone={toggleDone}
        onEdit={onEdit}
        edittingId={edittingId}
      />
    ),
    [edittingId, onEdit, toggleDone],
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.yellow1} barStyle="light-content" />
      <Header />
      <View style={styles.spacingWrapper}>
        {showAdd && <AddTodo onClose={hideAddTodo} />}
        <FlatList
          data={todos}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={item => item.id}
          initialNumToRender={6}
          maxToRenderPerBatch={8}
          windowSize={18}
        />
        <TouchableOpacity style={styles.button} onPress={showAddTodo}>
          <Text style={styles.buttonText}>Tạo task mới</Text>
          <Image source={images.addIcon} width={12} height={12} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
