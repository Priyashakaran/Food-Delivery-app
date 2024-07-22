import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category,setCategory }) => {
    
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">
        Discover the delectable offerings on Tomato's menu, where culinary delights from a wide array of cuisines await you. From mouth-watering appetizers and hearty main courses to indulgent desserts and refreshing beverages, our carefully curated selection ensures there's something to satisfy every palate.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;