import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import { actions } from "../store";
import ReadBook from "../components/ReadBook";

const ReadBookContainer = props => {
  const dispatch = useDispatch();

  const {
    match: { params }
  } = props;

  const getBook = useCallback(() => {
    dispatch(actions.getBook(params.bookId));
  }, [dispatch, params]);

  useEffect(() => {
    getBook();
  }, [getBook]);

  const book = useSelector(state => state.book.book);

  console.log(book);

  return book.linkUrl ? (
    <ReadBook {...props} url={book.linkUrl} title={book.title} />
  ) : null;
};

export default withRouter(ReadBookContainer);
