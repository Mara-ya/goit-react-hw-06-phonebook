import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { removedContact } from "redux/contactSlice";
import { Contact } from "../Contact/Contact";

export const ContactList = ({filtered}) => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.phonebook.contacts);
    const filter = useSelector(state => state.phonebook.filter);  

    function handleDelete (id) {
    dispatch(removedContact(id));
    };

    return (
        <ul>
            {filtered.map(({ id, name, number }) => {
                return (
                    <li key = {id}>
                        <Contact contact={{id, name, number }} onDelete={handleDelete}/>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.proptype = {
    filtered: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.isRequired
        })
    )
}