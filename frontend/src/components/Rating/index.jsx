import { StarIcon as FullStar } from '@heroicons/react/24/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline';

function Rating({ value, text }) {
  const totalStars = 5;
  const activeStars = Number(value);
  const formatKey = (n) => `${n} star`;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        {[...new Array(totalStars)].map((arr, index) =>
          index < activeStars ? (
            <FullStar key={formatKey(index)} className="w-8" />
          ) : (
            <EmptyStar key={formatKey(index)} className="w-8" />
          )
        )}
      </div>
      <span>{text && text}</span>
    </div>
  );
}

export default Rating;
