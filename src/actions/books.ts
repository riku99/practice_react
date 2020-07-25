export const getBooks = {
  getBook: (url: string) => ({ type: "GET_BOOK" as const, url: url }),
  success: (response: { title: string; authors: string[] }) => ({
    type: "CHANGE_BOOK" as const,
    data: response,
  }),
  error: (message: string) => ({
    type: "ERROR_BOOK" as const,
    message: message,
  }),
};

export type BooksAction =
  | ReturnType<typeof getBooks.getBook>
  | ReturnType<typeof getBooks.success>
  | ReturnType<typeof getBooks.error>;
