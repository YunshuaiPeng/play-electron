<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div class="container mx-auto px-4 max-w-4xl">
            <div class="mb-8">
                <button @click="goBack"
                    class="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to List
                </button>
            </div>

            <div v-if="loading" class="bg-white shadow-xl rounded-xl p-8 text-center text-gray-600">
                Loading...
            </div>

            <div v-else-if="error" class="bg-white shadow-xl rounded-xl p-8">
                <div class="text-red-600">
                    Loading Failed: {{ error }}
                </div>
            </div>

            <div v-else class="bg-white shadow-xl rounded-xl p-8">
                <h1 class="text-2xl font-bold text-gray-800 mb-6">{{ bomData.name }}</h1>
                
                <!-- Basic Information -->
                <div class="mb-6">
                    <h2 class="text-lg font-semibold mb-3">Basic Information</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-gray-600">SKU: {{ bomData.sku }}</p>
                            <p class="text-gray-600">BOM ID: {{ bomData.bom_id }}</p>
                            <p class="text-gray-600">Updated At: {{ bomData.updated_at }}</p>
                        </div>
                        <div>
                            <p class="text-gray-600">Price: {{ bomData.start_price }} {{ bomData.currency }}</p>
                            <p class="text-gray-600">Assembly Cost: {{ bomData.min_assembly_cost }}</p>
                            <p class="text-gray-600">Assembly Rate: {{ bomData.assembly_rate }}</p>
                        </div>
                    </div>
                </div>

                <!-- Sections -->
                <div v-if="bomData.sections" class="space-y-6">
                    <div v-for="section in bomData.sections" :key="section.section_id" class="border-t pt-4">
                        <h2 class="text-lg font-semibold mb-3">{{ section.name }}</h2>
                        <div class="space-y-4">
                            <div v-for="group in section.groups" :key="group.group_id">
                                <h3 class="font-medium text-gray-700 mb-2">{{ group.name }}</h3>
                                <div class="space-y-2">
                                    <div v-for="component in group.components" 
                                         :key="component.component_id"
                                         class="flex justify-between items-center p-2 bg-gray-50 rounded">
                                        <span>{{ component.description }}</span>
                                        <span class="text-gray-600">Quantity: {{ component.quantity }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Warranties -->
                <div v-if="bomData.warranties" class="border-t mt-6 pt-4">
                    <h2 class="text-lg font-semibold mb-3">Warranty Options</h2>
                    <div class="space-y-3">
                        <div v-for="warranty in bomData.warranties" 
                             :key="warranty.warranty_id"
                             class="p-3 bg-gray-50 rounded">
                            <p class="font-medium">{{ warranty.name }}</p>
                            <p class="text-gray-600 text-sm">{{ warranty.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const { ipcRenderer } = require('electron')

const router = useRouter()
const route = useRoute()
const bomData = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
    try {
        loading.value = true
        error.value = null
        bomData.value = await ipcRenderer.invoke('read-bom-file', route.params.filename)
    } catch (err) {
        console.error('Error loading BOM file:', err)
        error.value = err.message
    } finally {
        loading.value = false
    }
})

const goBack = () => {
    router.push({ name: 'home' })
}
</script>

<style scoped>
.container {
    max-width: 1200px;
}
</style> 