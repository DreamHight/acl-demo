<template>
  <span
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: linear-gradient(180deg, #EDCD9B 0%, #E44 100%);
    "
    @click="backHandler"
  >
    <span
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid #FFF;
        background: linear-gradient(180deg, #EDCD9B 0%, #E44 100%);
      "
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
        <path d="M9.37401 10.8754C9.29862 10.8007 9.23878 10.7117 9.19795 10.6137C9.15711 10.5157 9.13609 10.4105 9.13609 10.3044C9.13609 10.1982 9.15711 10.093 9.19795 9.99502C9.23878 9.897 9.29862 9.80804 9.37401 9.73326L13.066 6.04935C13.1414 5.97458 13.2012 5.88561 13.242 5.7876C13.2829 5.68958 13.3039 5.58445 13.3039 5.47826C13.3039 5.37208 13.2829 5.26695 13.242 5.16893C13.2012 5.07091 13.1414 4.98195 13.066 4.90718C12.9153 4.75737 12.7114 4.67328 12.4989 4.67328C12.2864 4.67328 12.0825 4.75737 11.9318 4.90718L8.23988 8.59913C7.788 9.05158 7.53418 9.66489 7.53418 10.3044C7.53418 10.9438 7.788 11.5571 8.23988 12.0096L11.9318 15.7015C12.0817 15.8501 12.2839 15.9339 12.4949 15.9348C12.6007 15.9354 12.7057 15.9151 12.8037 15.8751C12.9017 15.8351 12.9908 15.7761 13.066 15.7015C13.1414 15.6267 13.2012 15.5378 13.242 15.4398C13.2829 15.3418 13.3039 15.2366 13.3039 15.1304C13.3039 15.0243 13.2829 14.9191 13.242 14.8211C13.2012 14.7231 13.1414 14.6341 13.066 14.5594L9.37401 10.8754Z" fill="white"/>
      </svg>
    </span>
  </span>
</template>

<script setup lang="ts">
const router = useRouter()

// defineProps and defineEmits start
const props = defineProps({
  backFn: {
    type: Function,
  },
});
// defineProps and defineEmits end

function backHandler(): void {
  const { backFn } = props
  if (typeof(backFn) === 'function') {
    backFn();
  } else {
    // if (window.history.state.back) {
    //   window.history.back()
    // } else {
    //   router.replace('/')
    // }
    try {
      router.back()
    } catch (error) {
      router.replace('/home/home')
    }
  }
}
</script>