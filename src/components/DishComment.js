import React from 'react';

class DishComment extends React.Component {
  render() {
    const { comment, author, date } = this.props;

    var dateFormatted = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    if (comment === null) {
      return <div></div>;
    }
    return (
      <>
        <li>{comment}</li>
        <li className='mt-2 mb-4'>
          -- {author}, {dateFormatted}
        </li>
      </>
    );
  }
}

export default DishComment;
