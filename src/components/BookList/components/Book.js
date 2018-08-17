import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import './Book.css';
import bookImage from '../../../ui/assets/book.png';

const Book = ({ title, description }) => {
  return (
    <div className="book">
      {/* <div className="book-overlay">BUTTON</div> */}
      <Card fluid>
        <Image src={bookImage} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          {/* <Card.Description className="book-description">
            {description}
          </Card.Description> */}
        </Card.Content>
      </Card>
    </div>
  );
};

Book.displayName = 'Book';
export default Book;

// import React from 'react';
// import { Card, Icon, Image } from 'semantic-ui-react';

// import './Book.css';

// const Book = ({ title }) => {
//   return <div className="book">{title}</div>;
// };

// Book.displayName = 'Book';
// export default Book;
