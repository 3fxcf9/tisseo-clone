<script setup lang="ts">
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { ref } from 'vue';
import getEndpointUrl from '../config/endpoints';

const lines = ref([])

await getEndpointUrl('lines').then(async (url) => {
    if (!url) return

    const response: HttpResponse = await CapacitorHttp.get({ url });
    lines.value = response.data.lines.line
})
</script>

<template>
    <h1>Lignes</h1>
    {{ JSON.stringify(lines) }}
</template>