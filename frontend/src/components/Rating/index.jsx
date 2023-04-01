import { StarIcon	as FullStar } from '@heroicons/react/24/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/24/outline';


const Rating = ({value, text}) => {
	const totalStars = 5;
	const activeStars = Number(value);

	return (
		<div className='flex flex-col'>
			<div className='flex flex-row justify-center'>
				{[...new Array(totalStars)].map((arr, index) => {
					return index < activeStars ? <FullStar className='w-8' /> : <EmptyStar className='w-8' />;
				})}
			</div>
			<span>{text && text}</span>
		</div>
	);
};

export default Rating;
