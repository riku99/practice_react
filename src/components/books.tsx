import React, { FC } from "react";

import { forStateProps, forDispatchProps } from "../containers/books";

type BooksStateType = forStateProps & forDispatchProps;

const Books: FC<BooksStateType> = ({ title, authors, getBook, message }) => {
  return (
    <>
      <div>{title}</div>
      <div>
        {authors.map((author) => {
          return <div key={author}>{author}</div>;
        })}
      </div>
      {message ? <div>{message}</div> : null}
      <input
        type="button"
        value="マンキュー経済学"
        onClick={() =>
          getBook(
            "https://www.googleapis.com/books/v1/volumes?q=isbn:9784492313527"
          )
        }
      />
      <input
        type="button"
        value="ファクトフルネス"
        onClick={() =>
          getBook(
            "https://www.googleapis.com/books/v1/volumes?q=isbn:9784822289607"
          )
        }
      />

      <input
        type="button"
        value="見つからない本"
        onClick={() =>
          getBook(
            "https://www.googleapis.com/books/v1/volumes?q=isbn:978482228"
          )
        }
      />
    </>
  );
};

export default Books;
