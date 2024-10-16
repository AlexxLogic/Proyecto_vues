<template>
  <div class="bg-gray-800 w-screen h-screen text-white">


    
    <div class="text-4xl bg-black font-bold h-20 pt-4 text-[gold]">
        <h1>Pagina de Inicio</h1>
    </div>

    <div class="div1 text-2x1 bg-gray-900 pt-4 mt-[60px] w-[250px] mx-[60px] rounded-lg pb-5">

      <div class="text-4xl font-bold text-[gold] mb-5">
        <router-link to="/Pagina_index" ><h1>Menu</h1></router-link>
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

    <div class="div1 ml-[110px] mt-[60px] w-[400px] h-[400px]">
      <img class="w-[100%] h-[100%]" src="@/assets/logo.png" alt="">
    </div>
    




  </div>
<router-view/>
</template>
<script>


export default{

  created(){
      
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