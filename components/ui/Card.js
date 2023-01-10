import { StyleSheet, View } from "react-native"
import Colors from "../../constants/colors"

function Card({children}) {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // elevation is all you need for basic andriod shadow
    //ios needs all 4 
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: .25,
  },
})