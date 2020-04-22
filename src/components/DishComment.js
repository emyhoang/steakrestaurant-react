import React from 'react';

class DishComment extends React.Component {
  render() {
    const { comment, author, date } = this.props;

    if (comment === null) {
      return <div></div>;
    }
    return (
      <>
        <li>{comment}</li>
        <li className='mt-4 mb-4'>
          -- {author}, {date}
        </li>
      </>
    );
  }
}

export default DishComment;
