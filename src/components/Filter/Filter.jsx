import { useDispatch, useSelector } from "react-redux";
import { onChangeFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";
import css from './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = (e) => {
    dispatch(onChangeFilter(e.target.value));
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>Find contacts by name</label>
      <input className={css.inputFilter}
        type="text"
          value={filter}
          onChange={handleFilterChange}
        ></input>

    </div>
  )
}