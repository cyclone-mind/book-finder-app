import { ref } from 'vue'
import { defineStore } from 'pinia'
import { searchBooks } from '@/api/searchbooks' // 确保路径正确

// 定义书籍条目的接口 (基于用户提供的示例 JSON)
interface BookVolumeInfo {
  title: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  pageCount?: number;
  categories?: string[];
  averageRating?: number;
  ratingsCount?: number;
  infoLink?: string;
  // 可以根据需要添加更多字段
}

interface BookItem {
  id: string;
  volumeInfo: BookVolumeInfo;
  // 可以根据需要添加 saleInfo, accessInfo 等
}

export const useBookStore = defineStore('book', () => {
  // State
  const books = ref<BookItem[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Actions
  async function searchBooksAction(query: string) {
    if (!query.trim()) {
      books.value = []
      error.value = null
      return
    }
    loading.value = true
    error.value = null
    try {
      const response = await searchBooks(query)
      // API 可能在没有找到结果时返回 items: undefined
      books.value = response.items || []
    } catch (err) {
      console.error('Error searching books:', err)
      error.value = 'Failed to fetch books. Please try again later.'
      books.value = [] // 清空旧结果
    } finally {
      loading.value = false
    }
  }

  // Getters (如果需要的话，可以在这里添加)
  // const hasResults = computed(() => books.value.length > 0)

  return {
    books,
    loading,
    error,
    searchBooksAction,
    // hasResults, // 如果添加了 getter，需要在这里返回
  }
}) 