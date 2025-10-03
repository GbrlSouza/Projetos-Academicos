<template>
  <div class="min-h-screen bg-amber-50 text-amber-900 font-serif">
    <!-- Header -->
    <header class="bg-amber-800 text-amber-100 p-6 border-b-4 border-amber-600">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl font-bold mb-2">Estúdio Musical Rústico 🎶</h1>
        <p class="text-amber-200">Explore as escalas musicais e ouça cada nota</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto p-6">
      <!-- Controls -->
      <div class="bg-amber-100 rounded-lg p-6 mb-8 border-2 border-amber-200 shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Nota -->
          <div>
            <label class="block text-sm font-semibold mb-2 text-amber-800">Nota Tônica</label>
            <select v-model="selectedNote"
              class="w-full p-3 bg-amber-50 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
              <option v-for="n in notes" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>

          <!-- Escala -->
          <div>
            <label class="block text-sm font-semibold mb-2 text-amber-800">Tipo de Escala</label>
            <select v-model="selectedScale"
              class="w-full p-3 bg-amber-50 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
              <option v-for="s in scales" :key="s.value" :value="s.value">{{ s.label }}</option>
            </select>
          </div>
        </div>

        <!-- Botão -->
        <button
          @click="playScale"
          :disabled="isPlaying"
          class="w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-200"
          :class="isPlaying ? 'bg-amber-400 text-amber-800 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700 text-amber-100 hover:scale-105'">
          {{ isPlaying ? 'Tocando...' : '▶️ Tocar Escala' }}
        </button>
      </div>

      <!-- Escala -->
      <div class="bg-amber-100 rounded-lg p-6 border-2 border-amber-200 shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-amber-800">
          Escala {{ selectedNote }} {{ currentScaleLabel }}
        </h2>

        <!-- Notas -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="(note, i) in currentScaleNotes" :key="i"
            class="bg-amber-200 rounded-lg p-4 text-center border-2 border-amber-300 hover:bg-amber-300 transition-colors cursor-pointer group"
            @click="playSingleNote(note)">
            <div class="text-2xl font-bold text-amber-800 mb-2 group-hover:scale-110 transition-transform">
              {{ note }}
            </div>
            <div class="text-sm text-amber-600">
              {{ getNoteLabel(i) }}
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-amber-800 text-amber-200 p-6 mt-12 border-t-4 border-amber-600 text-center">
      © 2024 Estúdio Musical Rústico - Feito com Vue 🎻
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";

const selectedNote = ref("C");
const selectedScale = ref("maior");
const isPlaying = ref(false);
const audioContext = ref(null);

const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const scales = [
  { value: "maior", label: "Escala Maior" },
  { value: "menor", label: "Escala Menor Natural" },
  { value: "menor-harmonica", label: "Escala Menor Harmônica" },
  { value: "pentatonica-menor", label: "Pentatônica Menor" },
  { value: "blues", label: "Escala de Blues" }
];

const scalePatterns = {
  "maior": [0, 2, 4, 5, 7, 9, 11],
  "menor": [0, 2, 3, 5, 7, 8, 10],
  "menor-harmonica": [0, 2, 3, 5, 7, 8, 11],
  "pentatonica-menor": [0, 3, 5, 7, 10],
  "blues": [0, 3, 5, 6, 7, 10],
};

const baseFrequencies = {
  "C": 261.63, "C#": 277.18, "D": 293.66, "D#": 311.13,
  "E": 329.63, "F": 349.23, "F#": 369.99, "G": 392.00,
  "G#": 415.30, "A": 440.00, "A#": 466.16, "B": 493.88
};

const getScaleNotes = () => {
  const baseIndex = notes.indexOf(selectedNote.value);
  const pattern = scalePatterns[selectedScale.value];
  return pattern.map(interval => notes[(baseIndex + interval) % 12]);
};

const currentScaleNotes = computed(() => getScaleNotes());
const currentScaleLabel = computed(() =>
  scales.find(s => s.value === selectedScale.value)?.label
);

const playNote = (freq, duration = 0.5) => {
  if (!audioContext.value) return;
  const osc = audioContext.value.createOscillator();
  const gain = audioContext.value.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.value = 0.3;
  osc.connect(gain);
  gain.connect(audioContext.value.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.value.currentTime + duration);
  osc.stop(audioContext.value.currentTime + duration);
};

const playScale = async () => {
  if (!audioContext.value) {
    audioContext.value = new (window.AudioContext || window.webkitAudioContext)();
    await audioContext.value.resume();
  }
  isPlaying.value = true;
  for (let n of currentScaleNotes.value) {
    playNote(baseFrequencies[n], 0.5);
    await new Promise(r => setTimeout(r, 500));
  }
  isPlaying.value = false;
};

const playSingleNote = (note) => {
  if (!audioContext.value) return;
  playNote(baseFrequencies[note], 1);
};

const getNoteLabel = (i) => {
  if (i === 0) return "Tônica";
  if (i === 4) return "Dominante";
  if (i === currentScaleNotes.value.length - 1) return "Oitava";
  return `Grau ${i + 1}`;
};

onUnmounted(() => {
  audioContext.value?.close();
});
</script>
