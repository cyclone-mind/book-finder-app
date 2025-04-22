<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-indigo-700 mb-2">Book Finder</h1>
        <p class="text-gray-600">Discover your next favorite book</p>
      </header>

      <!-- Search Section -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              id="searchInput"
              v-model="searchQuery"
              placeholder="Search by title, author, ISBN..."
              class="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              @keyup.enter="handleSearch"
            />
            <button
              id="searchBtn"
              class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              @click="handleSearch"
              :disabled="loading"
            >
              <i class="fas fa-search"></i>
              <span v-if="!loading">Search</span>
              <span v-else>Searching...</span>
            </button>
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="text-sm text-gray-500">Try: </span>
            <button
              class="suggestion-btn text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition"
              @click="changeSearchQuery('Harry Potter')"
            >
              Harry Potter
            </button>
            <button
              class="suggestion-btn text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition"
              @click="changeSearchQuery('Stephen King')"
            >
              Stephen King
            </button>
            <button
              class="suggestion-btn text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition"
              @click="changeSearchQuery('1984')"
            >
              1984
            </button>
            <button
              class="suggestion-btn text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full transition"
              @click="changeSearchQuery('Pride and Prejudice')"
            >
              Pride and Prejudice
            </button>
          </div>
        </div>
      </div>

      <!-- Loading Indicator -->
      <div v-if="loading" id="loadingIndicator" class="flex justify-center my-12">
        <div class="loading-spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="max-w-2xl mx-auto my-8 p-4 bg-red-100 text-red-700 border border-red-300 rounded-lg text-center">
        <i class="fas fa-exclamation-triangle mr-2"></i>
        {{ error }}
      </div>

      <!-- Results Section -->
      <div v-if="!loading && !error" id="resultsContainer">
        <div v-if="books.length > 0">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">Search Results ({{ books.length }})</h2>
          <div id="resultsGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="book in books" :key="book.id" class="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
              <img 
                :src="book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192.png?text=No+Image'" 
                :alt="book.volumeInfo.title + ' cover'" 
                class="w-full h-48 object-cover"
                loading="lazy"
              >
              <div class="p-4">
                <h3 class="font-semibold text-lg mb-1 truncate" :title="book.volumeInfo.title">{{ book.volumeInfo.title }}</h3>
                <p class="text-sm text-gray-600 mb-2 truncate" :title="book.volumeInfo.authors?.join(', ')">
                  {{ book.volumeInfo.authors?.join(', ') || 'Unknown Author' }}
                </p>
                <p class="text-xs text-gray-500">{{ book.volumeInfo.publishedDate || 'N/A' }}</p>
                 <a 
                  v-if="book.volumeInfo.infoLink"
                  :href="book.volumeInfo.infoLink"
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="mt-3 inline-block text-indigo-600 hover:text-indigo-800 text-sm"
                >
                  More Info <i class="fas fa-external-link-alt ml-1 text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="!loading && books.length === 0 && searchQuery" id="noResults" class="text-center py-12">
          <i class="fas fa-book-open text-5xl text-gray-300 mb-4"></i>
          <h3 class="text-xl font-medium text-gray-600">No books found for "{{ searchQuery }}"</h3>
          <p class="text-gray-500">Try a different search term</p>
        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-16 text-center text-gray-500 text-sm">
        <p>Powered by Google Books API</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useBookStore } from '../stores/bookStore'

const searchQuery = ref('')
const bookStore = useBookStore()

const { books, loading, error } = storeToRefs(bookStore)

const changeSearchQuery = (query: string) => {
  searchQuery.value = query
  handleSearch()
}

const handleSearch = async () => {
  await bookStore.searchBooksAction(searchQuery.value)
}
</script>
