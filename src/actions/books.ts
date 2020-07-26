export const getBooks = {
  getBook: (url: string) => ({ type: "GET_BOOK" as const, url: url }),
  success: (response: {
    title: string;
    authors: string[];
    image: string | null;
  }) => ({
    type: "CHANGE_BOOK" as const,
    data: response,
  }),
  error: (message: string) => ({
    type: "ERROR_BOOK" as const,
    message: message,
  }),
};

export const myBook = {
  saveBook: (title: string, authors: string[], image: string | null) => ({
    type: "SAVE_BOOK" as const,
    book: { title: title, authors: authors, image: image },
  }),
};

export type BooksAction =
  | ReturnType<typeof getBooks.getBook>
  | ReturnType<typeof getBooks.success>
  | ReturnType<typeof getBooks.error>
  | ReturnType<typeof myBook.saveBook>;
