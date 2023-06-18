<script setup lang="ts">
import { ref } from 'vue'
import { Preferences } from '@capacitor/preferences';

let modalOpen = ref(false)
function setModalVisibility() {
    Preferences.get({ key: 'key' }).then(res => {
        modalOpen.value = !Boolean(res.value)
    })
}
setModalVisibility()

let keyInputValue = ref('')
let keyInputValid = ref(true)

async function saveKey() {
    if (!keyInputValue.value.length) return keyInputValid.value = false;
    Preferences.set({
        key: 'key',
        value: keyInputValue.value,
    });
    setModalVisibility()
}
</script>

<template>
    <div class="curtain" v-if="modalOpen">
        <div class="modal">
            <h3>Clé d'API Tisseo</h3>
            <p>Afin d'utiliser cette application, veuillez entrer votre clé d'API Tisseo.</p>
            <input type="text" placeholder="Tisseo API key" :class="{ invalid: !keyInputValid }" v-model="keyInputValue">
            <button @click="saveKey">Valider</button>
        </div>
    </div>
</template>

<style scoped>
.curtain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 10000;
}

.modal {
    margin: 0 1rem;
    padding: 2rem;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    border-radius: 1rem;
}

input {
    padding: 1rem 1.5rem;
    border-radius: .5rem;
    width: 100%;
    font-family: monospace;
}

input.invalid {
    border: 2px solid rgb(190, 17, 17);
}

button {
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--primary);
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    align-self: flex-end;
    margin-top: 1rem;
}
</style>