/*
	Napraviti mini-library za form submission.
	Implementacija u pozadini treba da koristi context API i da se ne oslanja na postojece npm pakete za forme.
	Sva logika (input[value], input[onChange], form[onSumbit]) treba da se nalazi u FormContext, Form i FormInput
	komponentama tako da nije izlozena korisniku library-a.

	State forme moze da se nalazi u FormContext ili u Form komponenti
	Ukoliko je sva logika u Form, FormContext nije ni potreban tako da ga mozes izbaciti.

	Ispod je primjer komponente koja bi koristila library na zeljeni nacin. Ukoliko ovakva struktura
	bude u browseru rezultovala renderovanju forme koja na submit loguje userInfo objekat sa izmjenjenim vrijednostima,
	zadatak se smatra uspjesno zavrsenim.

	Koristiti React i TypeScript i parcel.
	Pozeljno je napisati testove za library.

	Puno srece ;-)
*/
import React, { useState } from 'react';
import {Form, FormInput} from './Form';

export const PageWithForm = () => {
	// Example
	const [userInfo, setUserInfo] = useState({
		email: 'example@alea.com',
		age: 30,
		name: 'John Doe',
		phone: {
			ext: '00387',
			number: '65/123-456',
		},
	});

	return (
		<div>
			<Form initialValues={userInfo} onSubmit={setUserInfo}>
				<FormInput type="email" required name="email" placeHolder="your@email.com" />
				<FormInput type="number" name="age" />
				<FormInput type="text" required name="name" />
				<FormInput type="text" name="phone.ext" />
				<FormInput type="text" name="phone.number" />
				<FormInput type="submit" value="Submit" />
			</Form>
		</div>
	);
};