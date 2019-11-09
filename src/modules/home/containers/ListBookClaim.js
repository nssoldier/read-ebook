import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import { actions } from "../store";
import { actions as userActions } from "../../authentication/store";
import ListBookClaimed from "../components/ListBookClaimed";

const ListBookClaimedContainer = props => {
  const dispatch = useDispatch();

  const getListBookClaimed = useCallback(() => {
    dispatch(actions.getBookListClaimed());
    dispatch(userActions.getCurrentUser());
  }, [dispatch]);
  const onSubmit = useCallback(
    ({ fullName, workplace, technique, phoneNumber }) => {
      dispatch(
        userActions.updateInformation({
          fullName,
          workplace,
          technique,
          phoneNumber
        })
      );
    },
    [dispatch]
  );

  const claimBook = useCallback(
    code => {
      dispatch(actions.claimBook(code));
    },
    [dispatch]
  );

  useEffect(() => {
    getListBookClaimed();
  }, [getListBookClaimed]);

  const { history } = props;

  const readBook = id => {
    history.push(`/read/${id}`);
  };

  const books = useSelector(state => state.book.listBook);
  const claimErr = useSelector(state => state.book.claimErr);
  const claiming = useSelector(state => state.book.claiming);
  const loadingBooks = useSelector(state => state.book.loadingBooks);
  const currentUser = useSelector(state => state.authentication.currentUser);

  return (
    <ListBookClaimed
      {...props}
      books={books}
      firstTime={currentUser.firstTime}
      readBook={readBook}
      onSubmit={onSubmit}
      claimBook={claimBook}
      claimErr={claimErr}
      claiming={claiming}
      loadingBooks={loadingBooks}
    />
  );
};

export default withRouter(ListBookClaimedContainer);
