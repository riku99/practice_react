import { connect } from "react-redux";
import { Dispatch } from "redux";

import Books from "../components/books";
import { initialState } from "../reducer";
import { getBooks } from "../actions/books";
import { myBook } from "../actions/books";

const mapStateToProps = (state: initialState) => {
  return {
    title: state.book.title,
    authors: state.book.authors,
    image: state.book.image,
    message:
      state.message && state.message.errorMessage
        ? state.message.errorMessage
        : null,
    savedBook: state.savedBook,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getBook: (url: string) => dispatch(getBooks.getBook(url)),
  saveBook: (title: string, authors: string[], image: string | null) =>
    dispatch(myBook.saveBook(title, authors, image)),
});

export type forStateProps = ReturnType<typeof mapStateToProps>;
export type forDispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Books);
