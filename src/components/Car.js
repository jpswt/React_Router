import React from 'react';
import cars from '../cars.json';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Chip } from '@mui/material';

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
	const { id } = useParams();
	let foundCar = cars.find((car) => car.id === parseInt(id));
	console.log(foundCar);
	return (
		<div>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Card
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						maxWidth: '32%',
						marginTop: '3.2rem',
						padding: '2rem 2rem 2rem 2rem',
					}}
				>
					<CardContent sx={{ fontWeight: 400 }}>
						<h2>{foundCar.Name}</h2>
						{Object.keys(foundCar).map((item, index) => (
							<Chip item={index} label={`${item}: ${foundCar[item]}`} />
						))}
					</CardContent>
				</Card>
			</Box>
		</div>
	);
};

export default Car;
