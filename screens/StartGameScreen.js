import { TextInput, View, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }
  
  function resetInputHandler() {
    setEnteredNumber('')
  }
  
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber)
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Input must be a number between 1 and 99' ,
        [{text: 'okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return
    }
    console.log('valid number')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType='number-pad' 
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 4, // elevation is all you need for basic andriod shadow
    //ios needs all 4 
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: .25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})