import React from "react";

const StatusMessage = ({ winner, isNext, squares }) => {
  const noMovesleft = squares.every(squareValue => squareValue !== null);

  const NextPlayer = isNext ? 'X' : 'O';

  const renderStausMessage = () => {
    if (winner) {
      return (
        <React.Fragment>
          Winner is
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {winner}
          </span>{' '}
        </React.Fragment>
      );
    }
    if (!winner && noMovesleft) {
      return (
        <React.Fragment>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green ">X</span> tied
        </React.Fragment>
      );
    }
    if (!winner && !noMovesleft) {
      return (
        <React.Fragment>
          Next player is
          <span className={isNext ? 'text-green' : 'text-orange'}>
            {' '}
            {NextPlayer}
          </span>{' '}
        </React.Fragment>
      );
    }
    return null;
  };

  return <div className="status-message">{renderStausMessage()}</div>;
};
export default StatusMessage;
