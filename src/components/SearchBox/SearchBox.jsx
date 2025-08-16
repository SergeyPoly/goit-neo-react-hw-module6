import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFiltersName } from '../../redux/selectors';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const searchFieldId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFiltersName);

  const handleChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        className="input"
        type="text"
        onChange={handleChange}
        id={searchFieldId}
      />
    </div>
  );
};

export default SearchBox;
