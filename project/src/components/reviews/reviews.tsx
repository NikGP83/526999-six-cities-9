import { useParams } from 'react-router-dom';
import { commentsApi } from '../../services/comments-api';
import { getToken } from '../../services/token';
import ReviewForm from '../review-form/review-form';

function Reviews() {
  const { id } = useParams();
  const token = getToken();
  if(typeof id === 'undefined'){
    throw new Error('no work');

  }
  const { data } = commentsApi.useGetCommentsQuery({id, token});

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {data && data.map((comment) => (
          <li key={comment.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={comment.user.avatarUrl}
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">{comment.user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{comment.comment}</p>
              <time className="reviews__time" dateTime={comment.date}>
                {comment.date}
              </time>
            </div>
          </li>
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Reviews;
