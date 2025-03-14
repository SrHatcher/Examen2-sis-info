import { View, Text, TextInput, ScrollView, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'

const HomeScreen = () => { 
    //HORA: 20:42
    //hasta ahora recordé que tenia que hacer un hook para manejar todos estos estados y la validacion del formulario T.T
    const [codigo, setCodigo] = useState("")
    const [producto, setProducto] = useState("")
    const [selectedCategory, setSelectedCategory] = useState();
    const [cantidad, setCantidad] = useState(0)
    const [precio, setPrecio] = useState(0)
    const [comentario, setComentario] = useState("")

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    //No pude terminar la validacion de los campos, perdon u.u
    const comprobarFormulario= ()=>{
        if(codigo.length >= 11){

        }
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
                    <TextInput className='shadow-[0px_0px_2px_rgba(0,0,0,0.5)] p-4' onChangeText={amount => setCantidad(Number(amount))}></TextInput>
                </View>

                <View className='mt-8'>
                    <Text>Precio unitario</Text>
                    <TextInput className='shadow-[0px_0px_2px_rgba(0,0,0,0.5)] p-4' onChangeText={price => setPrecio(Number(price))}></TextInput>
                </View>
                
                {/*------ por alguna razon no funciona el datePicker :c ------ */}
                <View className='mt-8'>
                    <Text>Fecha de ingreso</Text>
                    <Button title="Open" onPress={() => setOpen(true)} />
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        }}
                        onCancel={() => {
                        setOpen(false)
                        }}
                    />
                </View>

                <View className='mt-8'>
                    <Text>Comentarios</Text>
                    <TextInput
                        className='shadow-[0px_0px_2px_rgba(0,0,0,0.5)] p-4'
                        editable
                        multiline
                        numberOfLines={5}
                        maxLength={40}
                        onChangeText={text => setComentario(text)}
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