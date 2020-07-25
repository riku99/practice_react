import { connect } from "react-redux";
import { Dispatch } from "redux";

import Books from "../components/books";
import { initialState } from "../reducer";
import { getBooks } from "../actions/books";

const mapStateToProps = (state: initialState) => {
  return {
    title: state.book.title,
    authors: state.book.authors,
    message: state.message ? state.message.errorMessage : null,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getBook: (url: string) => dispatch(getBooks.getBook(url)),
});

export type forStateProps = ReturnType<typeof mapStateToProps>;
export type forDispatchProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Books);
