import data from '../../service/data.json';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './home.css';

// ACTIONS
import * as ACTIONS from '../../redux/reducers/articles'
 /* import{
  FETCH_FAILURE,
  FETCH_SUCCESS,
  FETCH_STAR
  
} from '../../redux/reducers/articles' */

function Home() {

  const dispatch = useDispatch();
  const articles = useSelector(state => state.basket.data)
  console.log(articles);
  // donnee data.json : valeur par defaut
  const initialData = data ; 

  //  si dans localstorage utiliser sinon par defaut
  const [items, setItems] = useState(() => {
      const localData = localStorage.getItem('articles');
      return localData ? JSON.parse(localData) : initialData;
  });
  
    useEffect(() => {
      dispatch(ACTIONS.FETCH_STAR())
      dispatch(ACTIONS.FETCH_SUCCESS(data))
      localStorage.setItem('articles', JSON.stringify(items));
    }, [items]); // 
  
    const handleDelete = (itemName) => {
      const updatedItems = items.filter(item => item.name !== itemName); //filtre sans item selectionner
      setItems(updatedItems); // update de l'etat
    };

    return (
        <div className="articles-container">
          {/* <div>
            home
            {articles && articles.map(articles, index) =><div></div> }
          </div> */}
            {items?.map((item, index) => {
              return (
                <div key={index}>
                    <h2>{item.name}</h2>
                    <img src={item.picture[0].pic1} alt={item.name} width="200" />
                    <p>{item.content}</p>
                    <p>Prix: {item.price} €</p>
                    <p>Disponible: {(item.online && item.stock > 0) ? 'Oui' : 'Non'}</p>
                    <p>Stock: {item.stock}</p>
                    <p>Avis: {item.avis ? '★'.repeat(item.avis.stars) + ` (${item.avis.nb} avis)` : 'Pas d\'avis'}</p>
                    <Link to={`/details/${item.name}`} style={{ color:'royalblue', marginRight: '10px'}}> Description </Link>
                    <button onClick={() => handleDelete(item.name)}>Supprimer</button>
                </div>
            )})}
        </div>
    );
}

export default Home;
