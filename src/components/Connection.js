import './Connection.css';

function Connection({ imageUrl, altText, username, link, isVerified }) {
  return (
    <div className='connection-container'>
      <a className='connection-information' href={link}>
        <img src={imageUrl} alt={altText} />
        <span className='connection-text'>{username}</span>
        {isVerified && <img src='./images/verified.png' alt='verified' />}
      </a>

      <svg
        className='arrow'
        aria-hidden='true'
        role='img'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <polygon
          fill='currentColor'
          fillRule='nonzero'
          points='13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
        ></polygon>
      </svg>
    </div>
  );
}

export default Connection;
