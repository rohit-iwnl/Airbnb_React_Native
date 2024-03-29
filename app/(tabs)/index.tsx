import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Link href={"/(modals)/Login"} >
        Login
      </Link>
      <Link href={"/(modals)/Booking"}>
        Booking
      </Link>
      <Link href={"/listing/1337"}>
        1337
      </Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})