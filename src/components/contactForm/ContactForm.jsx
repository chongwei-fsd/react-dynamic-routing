import React from 'react';
import { useState, useRef, useEffect } from 'react';
import './ContactForm.css';

export default function ContactForm() {

    const [fullName, setFullName] = useState({ firstName: "", lastName: "" }); //object{firstName, lastName} links to fullName
    const [contactsData, setContactsData] = useState([]); //new contact is added to this array
    const [editContactIndex, setEditContactIndex] = useState(null); //track the index of contactsData being edited
    const inputRef = useRef(null);
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);

    useEffect(() => {  // Focus the input field when component mounts
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        if (fullName.firstName.trim() && fullName.lastName.trim()) {
            setIsBtnDisabled(false);
        } else {
            setIsBtnDisabled(true);
        }
    }, [fullName]); //the hook runs whenever the fullName object changes 

    const contacts = contactsData.map((contact, index) => //display the list of contacts
        <li key={contact.firstName + contact.lastName}>
            {contact.firstName} {contact.lastName}
            &nbsp;&nbsp;
            <button onClick={() => editContact(index)}>Edit</button>
            &nbsp;
            <button onClick={() => deleteContact(index)}>Delete</button>
        </li>
    );

    function handleSubmit(e) {
        e.preventDefault();
        if (editContactIndex !== null) { //if there's index data in the state of editContactIndex
            updateContact(editContactIndex); //pass the index data to update function
        }
        else {
            setContactsData(prev => [...prev, fullName]); //add the new contact into contactsData
            setFullName({ firstName: "", lastName: "" }); //reset form after submission
        }
    }

    function handleChange(e) {
        const { name, value } = e.target; //name: (firstName or lastName), value: input field. 
        setFullName(prev => ({ ...prev, [name]: value })); //[name]:value is a dynamic property assignment that updates only the specific key (either firstName or lastName) that matches the name variable.
    }

    function deleteContact(index) {
        // console.log(index)
        setContactsData(prev => prev.filter((c, i) => i !== index)); //filter current state array, creates a new array except the index data
    }

    function editContact(index) {
        setEditContactIndex(index); //pass the index into editContactIndex
        setFullName(contactsData[index]); //show the data in the form inputs
    }

    function updateContact(index) {
        setContactsData(prev => prev.map((c, i) => i === index ? fullName : c));
        setEditContactIndex(null);
        setFullName({ firstName: "", lastName: "" });
    }

    return (
        <>
            <form name='contactForm' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={fullName.firstName}
                    placeholder='First Name'
                    onChange={handleChange}
                    ref={inputRef}
                />

                <input
                    type="text"
                    name="lastName"
                    value={fullName.lastName}
                    placeholder='Last Name'
                    onChange={handleChange}
                />

                <button disabled={isBtnDisabled}>
                    {editContactIndex !== null ? 'Update contact' : 'Add contact'}
                </button>
            </form>

            <div className='contactbox'>
                <h5>Contact:</h5>
                <ul>
                    <ol>
                        {contacts}
                    </ol>
                </ul>
            </div>
        </>
    );
}


/**
 * TODO: update contacts arrow function to an implicit return 
*/


/**
 * !NOTE: function handleChange() has a const that is unwrapped that takes a key:value passed in from the event object
 * !NOTE: function handleChange() requires the () to indicate an implicit return of an object (in curly braces) - otherwise, the curly braces is mistaken for the body of the arrow function
 * !NOTE: function handleChange() object returned is an OBJECT with the { } braces
 * !NOTE: function handlechange() uses a computed property [name]:value to define the key and its value dynamically 
*/

/**
 * !NOTE: function handleSubmit [...prevContact, fullName] creates a new array that includes all previous contacts (...prevContact) followed by the new fullName entry at the end
*/