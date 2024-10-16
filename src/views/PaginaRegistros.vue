<template>
  <div class="bg-gray-800 w-screen h-screen text-white">


    
    <div class="text-4xl bg-black font-bold h-20 pt-4 text-[gold]">
        <h1>Pagina de Registros</h1>
    </div>

    <div class="div1 text-2x1 bg-gray-900 pt-4 mt-[60px] w-[250px] mx-[60px] rounded-lg pb-5">

      <div class="text-4xl font-bold text-[gold] mb-5">
          <router-link to="/Pagina_index"><h1>Menu</h1></router-link>
      </div>

    <router-link to="/Pagina_users">
    <button class="bg-gray-300 rounded-lg mx-auto text-black hover:bg-[#EAFCFF] font-bold mb-3 p-1">Usuarios</button><br>
    </router-link>
    
    <router-link to="/Pagina_proveedores">
      <button class="bg-gray-300 rounded-lg mx-auto text-black hover:bg-[#EAFCFF] font-bold mb-3 p-1">Proveedores</button><br>
    </router-link>
    
    <router-link to="/Pagina_registros">
      <button class="bg-gray-300 rounded-lg mx-auto text-black hover:bg-[#EAFCFF] font-bold mb-3 p-1">Registros</button><br>
    </router-link>
    
    <router-link to="/">
      <button class="bg-gray-300 rounded-lg mx-auto text-black hover:bg-[#EAFCFF] font-bold mb-3 p-1" @click="salir">Cerrar Sesion</button><br>
    </router-link>
    </div>

  <div class="div1 div2 ml-[50px] mt-[60px] w-[400px] h-[300px] bg-gray-700 border-4 border-gray-900 rounded-lg ">
      <table class="scroll border-4 border-gray-900 w-[100%]">
          <thead class="">
              <tr class="">
                  <th class="p-1 border-4 border-gray-900 text-[gold]" scope="col">Id</th>
                  <th class="p-1 border-4 border-gray-900 text-[gold]" scope="col">provedor</th>
                  <th class="p-1 border-4 border-gray-900 text-[gold]" scope="col">Peso</th>
                  <th class="p-1 border-4 border-gray-900 text-[gold]" scope="col">Fecha</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="info in registros" :key="info.id">
                  <td class="p-1 border-2 border-gray-900">{{ info.id}}</td>
                  <td class="p-1 border-2 border-gray-900">{{ info.nombre }}</td>
                  <td class="p-1 border-2 border-gray-900">{{ info.peso }}</td>
                  <td class="p-1 border-2 border-gray-900">{{ info.createdAt}}</td>


              </tr>
          </tbody>

      </table>   
  </div>
    




  </div>
  
</template>

<script>

  export default {
      name: 'Registrados',

          data(){
              return{
                  registros: []
              }
          },

          created(){
              fetch('http://localhost:4000/api/registros')
              .then(response => response.json())
              .then(data => (this.registros = data));
              const token = localStorage.getItem('token')
      if(token)
      {
  
      }else{
          
        this.$router.push('/');
        
      }
          },
          methods:{ 
    
    salir(){
      localStorage.removeItem('token');
    }
  }
  }


</script>
  
  <style>
  
  .div1{
    float:left;
  }
  </style>