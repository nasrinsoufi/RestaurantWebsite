import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/categoryList";
import Loading from "../Loading/loading";
import FastFoodList from "../FastFoodList/fastFoodList"
import SearchBar from "../SearchBar/searchBar";
import notFound from "../../assets/images/404.png";
import useAxios from "../../useAxios";



const HomePage =()=> {


  const [url, setUrl] = useState("/FastFood/list");
  const [fastFoodItems, , loading] = useAxios({
    url, // url: 'url'
  });
  // loading each category
  const filterItems = (categoryId) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  };

  const searchItems = async (term) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }

    if (fastFoodItems.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلیدواژه فوق هیچ آیتمی یافت نشد
          </div>
          <img className="mx-auto mt-5 d-block fade-in-horiz" src={notFound} />
        </>
      );
    }

    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
   
    <div className="wrapper bg-faded-dark " >     
      <CategoryList  filterItems={filterItems}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
    
    
  );
}

export default HomePage;

