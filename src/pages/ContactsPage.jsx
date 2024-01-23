import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/operation";
import { selectError, selectIsLoading } from "../redux/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
   return(
   <>
       <ContactForm />
       <Filter />
          {isLoading && !error && <b>Loading...</b>}
        <ContactList />
     </>
   )
}

export default ContactsPage