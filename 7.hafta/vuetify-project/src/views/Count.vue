<template>
    <div>
        <h1>
            {{ counter.count }}
        </h1>
        <v-btn @click="counter.increment()">Arttır</v-btn>
        <div>
            <v-btn @click="counter.incrementWithValue()">Çift Arttır</v-btn>
        </div>
    </div>
</template>

<script setup>
import { useAppStore } from '@/store/app';
const counter=useAppStore();
</script>
