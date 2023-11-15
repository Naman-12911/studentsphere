import { BeatLoader } from 'react-spinners';

export default function Spinner({color}) {
  return (
	<div>
		<BeatLoader
		color={color}
        loading={true}
        // cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
		/>
	</div>
  )
}
