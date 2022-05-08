<template>
  <div class="card">
    <h1>Пользователи любящие TypeScript</h1>
    <p v-if="error" style="color: red;">{{error}}</p>
   <Suspense>
        <template #default>
          <user-list/>
        </template>
         <template #loading>
          <p>Loading...</p>
        </template>
   </Suspense>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref,onErrorCaptured} from 'vue';
import UserList from '@/components/UserList.vue';

export default defineComponent({
  setup() {
    const error = ref<null | unknown>(null)
    onErrorCaptured(e => {
      error.value = e
    })
    return {
      error
    }
  },
  components: { UserList }
})
</script>
