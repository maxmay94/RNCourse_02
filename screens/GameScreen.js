import { View, Text, StyleSheet, Alert } from "react-native"
import { useState, useEffect } from "react"

import NumberContainer from "../components/game/NumberContainer"
import Title from "../components/ui/Title"
import PrimaryButton from "../components/ui/PrimaryButton"

function generateRandomNumberBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) return generateRandomNumberBetween(min, max, exclude)
  else return rndNum
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if(currentGuess === userNumber) onGameOver()
  }, [currentGuess, userNumber, onGameOver])

  function nextGuessHandler(direction) { // direction => 'lower' , 'greater'
    if(
      (direction === 'lower' && currentGuess < userNumber) || 
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't lie", 
        "you know that information is incorrect...", 
        [{text: 'Sorry', style: 'cencel'}])
      return
    }
    if(direction === 'lower') maxBoundary = currentGuess
    else minBoundary = currentGuess + 1
    const newRndNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)
  } 

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
        </View>
      </View>
      <View> 
        {/* LOG ROUNDS */}
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: 'row'
  }
})