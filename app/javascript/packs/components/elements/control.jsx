import React from 'react';
import control from 'packs/constants/control';
import { Container} from 'reactstrap';
import CreateList from 'packs/components/elements/create_list';

const Control = () => {
	return (
		<div className='section-dark'>
			<div className='section-wrapper'>
				<Container>
					<CreateList data={control} />
				</Container>
			</div>
		</div>
	);
};

export default Control;
