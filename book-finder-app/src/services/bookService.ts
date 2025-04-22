import axios from 'axios'

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
      smallThumbnail: string;
    };
    infoLink: string;
    categories?: string[];
    pageCount?: number;
    averageRating?: number;
  };
  saleInfo?: {
    country: string;
    saleability: string; // 例如 'FOR_SALE', 'NOT_FOR_SALE'
    isEbook: boolean;
    buyLink?: string;
    listPrice?: { amount: number; currencyCode: string };
    retailPrice?: { amount: number; currencyCode: string };
  };
}

export interface SearchResponse {
  items: Book[];
  kind: string;
  totalItems: number;
}

/**
 * 搜索图书
 * @param query 搜索关键词
 * @returns 搜索结果
 */
export const searchBooks = async (query: string): Promise<SearchResponse> => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    console.error("搜索图书出错:", error);
    throw error;
  }
}; 