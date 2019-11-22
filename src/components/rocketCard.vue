<template>
  <div class="rocket-card">
    <h3>{{name}}</h3>
    <img :src="picture" alt="" srcset="" />
    <p>{{first_flight}}</p>
  </div>
</template>
<script>
export default {
  name: 'rocketCard',
  props: {
    name:'',
    picture:'',
    first_flight:''
    //rocketId: String
  }
};
</script>
<style scoped>
.rocket-card{
  background-color: white;
display: flex;
flex-flow: column;
min-width:100px;
max-width: 300px;
text-align: center;
align-items: center;

border-radius: 1rem;
margin: 2rem;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.rocket-card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}


.rocket-card img{
width:100%;
}
  </style>
