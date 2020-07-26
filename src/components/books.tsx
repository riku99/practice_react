import React, { FC, useState } from "react";

import { forStateProps, forDispatchProps } from "../containers/books";

type BooksStateType = forStateProps & forDispatchProps;

const Books: FC<BooksStateType> = ({
  title,
  authors,
  image,
  message,
  getBook,
  saveBook,
  savedBook,
}) => {
  const [keyword, changeKeyword] = useState("");
  const [placeholder] = useState("キーワードを入力してください");

  let setKeyword = (keyword: string) => {
    return `https://www.googleapis.com/books/v1/volumes?q=serch+${keyword}`;
  };
  return (
    <>
      <div>{title}</div>
      {authors ? (
        <div>
          {authors.map((author) => {
            return <div key={author}>{author}</div>;
          })}
        </div>
      ) : (
        <div>作者が見つかりません</div>
      )}
      {image ? <img src={image} alt=""></img> : null}
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
      <input
        type="text"
        value={keyword}
        placeholder={placeholder}
        onChange={(event) => {
          changeKeyword(event.target.value);
        }}
      />
      <input
        type="button"
        value="検索"
        onClick={() => {
          getBook(setKeyword(keyword));
        }}
      />
      <input
        type="button"
        value="この本を保存"
        onClick={() => {
          return saveBook(title, authors, image);
        }}
      />
      <div>
        <p>保存した本:{savedBook.length}冊</p>
      </div>
    </>
  );
};

export default Books;
