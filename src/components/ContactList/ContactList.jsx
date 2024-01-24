import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operation";
import css from "./ContactList.module.css"
import { selectVisibleContacts } from "../../redux/selectors";

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContact = useSelector(selectVisibleContacts);

   return (
   <ul className={css.items}>
       {visibleContact.map((el) => {
         return <li className={css.contactList} key={el.id}>{el.name} {el.number}
           <button className={css.buttonDelete}
             type="button"
             name="delete"
             onClick={() => dispatch(deleteContact(el.id))}>
               Delete</button>
         </li>
      })
      }
     </ul>
    )
}