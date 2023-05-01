import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import ICON from 'react-native-vector-icons/MaterialIcons';

const COLORS = { primary: '#1f145c', white: '#fff' };

const App = () => {

  const [todos, setTodos] = React.useState([
    { id: 1, task: 'First to do', completed: true },
    { id: 2, task: 'Second to do', complete: false },
  ]);

  const ListItem = ({ todo }) => {
    return (
      <View style={styles.listItem}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.textList, { textDecorationLine: todo?.completed ? 'line-through' : 'none' }]}>
            {todo?.task}
          </Text>
        </View>

        {/* button click action */}
        {
          !todo?.completed && (
            <TouchableOpacity style={styles.actionIcon}>
              <ICON name='done' size={20} color={COLORS.white} />
            </TouchableOpacity>
          )}

        <TouchableOpacity style={[styles.actionIcon, { backgroundColor: 'red' }]}>
          <ICON name='delete' size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Text style={styles.text}>
          Todo List
        </Text>

        {/* Icon header */}
        <ICON name='delete' size={25} color='red' />
      </View>

      {/* List must has to do */}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        data={todos}
        renderItem={({ item }) => <ListItem todo={item} />}
      />

      {/* Footer */}
      <View style={styles.footer}>
        {/* Text input  */}
        <View style={styles.inputContainer}>
          <TextInput placeholder='Add to do' />
        </View>

        {/* button add to do */}
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <ICON name='add' color={COLORS.white} size={30} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.primary
  },
  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10
  },
  textList: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.primary,
  },
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  inputContainer: {
    backgroundColor: 'lightgray',
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    elevation: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  }
})