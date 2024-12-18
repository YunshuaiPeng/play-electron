<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div class="container mx-auto px-4 max-w-4xl">
            <h1 class="text-3xl font-bold text-center text-indigo-800 mb-8">
                <span class="inline-block border-b-4 border-indigo-400 pb-2">BOM 列表</span>
            </h1>

            <div class="bg-white shadow-xl rounded-xl overflow-hidden">
                <ul class="divide-y divide-gray-100">
                    <li v-for="bom in boms" :key="bom.filename"
                        class="p-6 hover:bg-indigo-50 transition-colors duration-200 flex items-center justify-between group cursor-pointer"
                        @click="goToDetail(bom.filename)">
                        <div class="flex items-center space-x-4">
                            <div
                                class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <span
                                class="text-lg text-gray-700 font-medium group-hover:text-indigo-600 transition-colors duration-200">
                                {{ bom.name }}
                            </span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400 group-hover:text-indigo-500 transition-colors duration-200"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const { ipcRenderer } = require('electron')

const router = useRouter()
const boms = ref([])

onMounted(async () => {
    try {
        boms.value = await ipcRenderer.invoke('read-bom-files')
    } catch (error) {
        console.error('Error loading BOM files:', error)
    }
})

const goToDetail = (filename) => {
    router.push({ name: 'bomDetail', params: { filename } })
}
</script> 