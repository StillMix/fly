import React,{useState} from 'react';
import './AddBil.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
function AddBil(props) {
    const [formValues, setFormValues] = useState({});


    function handleChange(e) {
      const {name, value} = e.target;
      setFormValues({
        ...formValues,
        [name]: value
      });
    }
  
  
  
      function handleSubmit(event) {
        event.preventDefault();
       props.handleSubmit(formValues)
    }
  return (
    <div className="addBil">
           <Header />
            <form onSubmit={handleSubmit}>
                <input placeholder='откуда' name='ot' value={formValues.ot}  onChange={handleChange}/>
                <input placeholder='куда' name='kuda' value={formValues.kuda}  onChange={handleChange}/>
                <input placeholder='дата' name='koda' value={formValues.koda}  onChange={handleChange}/>
                <input placeholder='время прибытия' name='kodaku' value={formValues.kodaku}  onChange={handleChange}/>
                <input placeholder='цена' name='cent' value={formValues.cent}  onChange={handleChange}/>
                <button type="submit">Добавить</button>
            </form>
    </div>
  );
}

export default AddBil;