<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="w-1/2 m-auto py-10 px-5">
    <h1 class="font-bold text-3xl text-gray-800 mb-6">To Do List</h1>
    <form @submit="" class="flex flex-col gap-2">
      <Textarea placeholder="To do..." />
      <Button class="w-full">Add to do</Button>
    </form>
  </section>
</template>
