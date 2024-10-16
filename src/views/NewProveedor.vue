<template>

    <div class="bg-gray-800 w-screen h-screen text-white">
    
    
          <div class="text-4xl bg-black font-bold h-20 pt-4 text-[gold]">
            <h1>Envio de datos a la API</h1>
          </div>
    
          <div class=" bg-gray-900 pt-4 mt-[90px] w-[250px] mx-auto rounded-lg pb-5">
            <h1 class="text-2xl font-bold">Nuevo Proveedor</h1><br>
          
            <div>
            <form @submit.prevent="newproveedor">
    
              <div>
                <input class="bg-gray-300 rounded-lg text-black p-1" v-model="nombre" required placeholder="  Nombre" type="text">
              </div><br>

              <div>
              <input class="bg-gray-300 rounded-lg text-black p-1" v-model="correo" required placeholder="  Correo" type="email">
              </div><br>
    
              <div>
                <input class="bg-gray-300 rounded-lg text-black p-1" v-model="telefono" required placeholder="  telefono" type="text">
              </div><br>
    
              <div class="bg-gray-300 rounded-lg w-[70px] mx-auto text-black font-bold p-1">
                <button type="submit">Guardar</button>
              </div>
              <div v-if="error" class="error">{{ error }}</div>
              <router-link to="/Pagina_proveedores">
                <button class="bg-red-300 rounded-lg mx-auto text-black hover:bg-[#EAFCFF] font-bold mb-1 p-1 mt-4">Cancelar</button><br>
            </router-link>
            </form>
            </div>
    
          </div>
    
    
    </div>
    <router-view/>
    </template>
    
    <script>
    import router from '@/router';
    
    export default {
      data(){
        return{
          nombre:'',
          correo:'',
          telefono:'',
          datos: []
        };
      },
      created(){
      
      const token = localStorage.getItem('token')
      if(token)
      {
  
      }else{
          
        this.$router.push('/');
        
      }
      
    },
    methods: {

    async newproveedor() {
      try {
        const response = await fetch('http://localhost:4000/api/proveedores', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: this.nombre,
            correo: this.correo,
            telefono: this.telefono  
          })
        });

        const data = await response.json();
        alert('Proveedor agregado exitosamente');
        this.$router.push('/Pagina_proveedores');


      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al agregar el proveedor');
      }
    }
  }
};
    </script>
    