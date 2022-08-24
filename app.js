// importing other stuff, utility functions for:
// working with supabase:
import { addGrocery, checkAuth, signOutUser } from './fetch-utils.js';
// pure rendering (data --> DOM):

/*  "boiler plate" auth code */
// checking if we have a user! (will redirect to auth if not):
checkAuth();
// can optionally return the user:
// const user = checkAuth();

// sign out link:
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
/* end "boiler plate auth code" */

// grab needed DOM elements on page:
const groceryForm = document.getElementById('grocery-form');
const groceryListEl = document.getElementById('grocery-list');
const deleteEl = document.getElementById('delete');

// local state:
let groceryItems = [];

groceryForm.addEventListener('submit', async (e) => {
e.preventDefault();
    const data = new FormData(groceryForm);
    const groceries = data.get('groceries');

    await addGrocery(groceries);
    groceryForm.reset();
    //display

});


// display functions:

// events:
