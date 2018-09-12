import React from 'react';
import TrainingComp1 from './TrainingComp1';
import TrainingComp2 from './TrainingComp2';

import Button from '@material-ui/core/Button';

const style = {
	display: "inline-grid"
}


const Training = ({fruitlist, clickRateFruits, ratingChanged}) => {

	return (
		<div style={style}>
			<TrainingComp1 />
			<div>
				<Button variant="contained" 
	                    className="submit_btn"
	            >Submit
	            </Button>
            </div>
			<TrainingComp2 fruitlist={fruitlist} clickRateFruits={clickRateFruits} ratingChanged={ratingChanged}/>
		</div>
		);
}

export default Training;