<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'vue-hooks-form'

const toDos = ref([])

const { useField, handleSubmit } = useForm({
  defaultValues: {}
})
const username = useField('username', {
  rule: { required: true }
})

const password = useField('password', {
  rule: {
    required: true,
    min: 6,
    max: 10
  }
})

const onSubmit = (data) => console.log(data)

// function addToDo(toDo) {
//   toDo.preventDefault()
//   console.log(toDo)

//   toDos.value = [
//     ...toDos.value,
//     {
//       content:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vero repellendus soluta dolores deleniti laboriosam rem itaque natus hic dignissimos.'
//     }
//   ]
// }
</script>

<template>
  <section class="w-1/2 m-auto py-10 px-5">
    <h1 class="font-bold text-3xl text-gray-800 mb-6">To Do List</h1>
    <form @submit="onSubmit" class="flex flex-col gap-2">
      <!-- <Textarea placeholder="To do..." /> -->
      <label>Username</label>
      <Input v-model="username.value" :ref="username.ref" />
      <p v-if="username.error">{{ username.error.message }}</p>
      <label>Password</label>
      <Input v-model="password.value" :ref="password.ref" type="password" />
      <p v-if="password.error">{{ password.error.message }}</p>
      <Button type="submit">submit</Button>
    </form>
    <li v-for="toDo in toDos">
      {{ toDo.content }}
    </li>
  </section>
</template>
