import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './pages/Home';
import { HideLoading, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Admin from './pages/Admin';


function App() {

  const {loading, portfolioData} = useSelector(state => state.root)
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading())
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(SetPortfolioData(response.data))
      dispatch(HideLoading())
    }
    catch (error){
      dispatch(HideLoading)
    }
  };

  useEffect(()=>{
    if(!portfolioData){
      getPortfolioData()
    }
  }, [portfolioData])



  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;