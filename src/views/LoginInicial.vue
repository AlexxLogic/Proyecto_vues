<template>

<div class="bg-gray-800 w-screen h-screen text-white">


      <div class="text-4xl bg-black font-bold h-20 pt-4 text-[gold]">
        <h1>Desafio Socopo</h1>
      </div>

      <div class=" bg-gray-900 pt-4 mt-[90px] w-[250px] mx-auto rounded-lg pb-5">
        <h1 class="text-2xl font-bold">Inicio de Sesión</h1><br>
      
        <div>
        <form @submit.prevent="loguear">

          <div>
          <input class="bg-gray-300 rounded-lg text-black p-1" v-model="email" required placeholder="  Correo" type="email">
          </div><br>

          <div>
            <input class="bg-gray-300 rounded-lg text-black p-1" v-model="password" required placeholder="  Contraseña" type="password">
          </div><br>

          <div class="bg-gray-300 rounded-lg w-16 mx-auto text-black font-bold">
            <button type="submit">Login</button>
          </div>
          <div v-if="error" class="error">{{ error }}</div>
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
      email:'',
      password:'',
      error:null,
      datos: []
    };
  },
  methods:{
    async loguear(){
      try{
        const response = await fetch('http://localhost:4000/api/usuarios')
        this.datos = await response.json();

        const usuarioEncontrado = this.datos.find(usuario => usuario.correo===this.email && usuario.password===this.password )

        if(usuarioEncontrado){
          localStorage.setItem('token',usuarioEncontrado.correo);
          alert('Login exitoso');
          this.$router.push('/Pagina_index');
        }else{
          this.error = 'datos incorrectos';
        }
      }catch (err){
        this.error = 'Datos invalidos'
      }
    }
  },


  
}
</script>
