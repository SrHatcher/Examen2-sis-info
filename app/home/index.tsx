import { View, Text, TextInput, ScrollView, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';

const HomeScreen = () => {
    const [codigo, setCodigo] = useState("")
    const [producto, setProducto] = useState("")
    const [selectedCategory, setSelectedCategory] = useState();

    const comprobarFormulario= ()=>{
        
    }

  return (
    <ScrollView>
        <View>
            {/* ------- Titulo de la Vista -------- */}
            <Text className='text-xl font-bold border-b text-center p-5'>Ingresar Productos</Text>

            {/* ------- Contenedor del formulario ------- */}
            <View className='mt-8 pr-8 pl-8 mb-16'>
                <View>
                    <Text>Codigo</Text>
                    <TextInput id='codigo' className='shadow-[0px_0px_2px_rgba(0,0,0,0.5)] p-4' placeholder='00001' onChangeText={text => setCodigo(text)}></TextInput>
                </View>
                <View className='mt-8'>
                    <Text>Nombre de producto</Text>
                    <TextInput className='shadow-[0px_0px_2px_rgba(0,0,0,0.5)] p-4' placeholder='Nvidia RTX3060i' onChangeText={text => setProducto(text)}></TextInput>
                </View>
                <View className='mt-8'>
                    <Text>Categoria</Text>
                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue, itemIndex) =>
                        setSelectedCategory(itemValue)
                        }>
                        <Picker.Item label="Componentes Electronicos" value="electronicos" />
                        <Picker.Item label="Documentos" value="documentos" />
                        <Picker.Item label="Farmacos" value="farmacos" />
                    </Picker>
                </View>

                <View className='mt-8'>
                    <Text>Cantidad</Text>
                    <TextInput className='shadow-[0px_0px_2px_rgba(0,0,0,0.5)] p-4' ></TextInput>
                </View>

                <View className='mt-8'>
                    <Text>Precio unitario</Text>
                    <TextInput className='shadow-[0px_0px_2px_rgba(0,0,0,0.5)] p-4' ></TextInput>
                </View>

                <View className='mt-8'>
                    <Text>Fecha de ingreso</Text>
                    
                </View>

                <View className='mt-8'>
                    <Text>Comentarios</Text>
                    <TextInput
                        className='shadow-[0px_0px_2px_rgba(0,0,0,0.5)] p-4'
                        editable
                        multiline
                        numberOfLines={5}
                        maxLength={40}
                        />
                </View>
                <View className='mt-8'>
                <Pressable 
                    onPress={()=>comprobarFormulario()}
                    className='bg-purple-600 text-white p-6' 
                    >
                    <Text className='text-white font-bold text-center text-xl'>Guardar Producto</Text>
                </Pressable>
                </View>
                
            </View>
        </View>
    </ScrollView>
  )
}

export default HomeScreen