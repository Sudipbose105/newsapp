
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App=()=>{

  const apiKey='431be9966be3448096c8aafa95de79f2';

  const [progress, setProgress] = useState(0);
  

  const changeProgress=(progress)=>{
    setProgress(progress);
  }
    return (
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<News changeProgress={changeProgress}  key="home"pageSize={20} country={'in'} headline="" apiKey={apiKey} category="general"/>}></Route>
          {/* <Route index element={<News changeProgress={changeProgress}  key=""pageSize={10} country={'in'}apiKey={'431be9966be3448096c8aafa95de79f2'} category="general"/>} /> */}
          <Route path="/business" element={<News changeProgress={changeProgress}  key="business"pageSize={20} country={'in'} headline="Business" apiKey={apiKey} category="business"/>}></Route>
          <Route path="/entertainment" element={<News changeProgress={changeProgress}  key="entertainment"pageSize={20} country={'in'} headline="Entertainment" apiKey={apiKey} category="entertainment"/>}></Route>
          <Route path="/general" element={<News changeProgress={changeProgress}  key="general"pageSize={20} country={'in'} headline="General" apiKey={apiKey} category="general"/>} ></Route>
          <Route path="/health" element={<News changeProgress={changeProgress}  key="health"pageSize={20} country={'in'} headline="Health" apiKey={apiKey} category="health"/>}></Route>
          <Route path="/science" element={<News changeProgress={changeProgress}  key="science"pageSize={20} country={'in'} headline="Science" apiKey={apiKey} category="science"/>} ></Route>
          <Route path="/sports" element={<News changeProgress={changeProgress}  key="sports"pageSize={20} country={'in'} headline="Sports" apiKey={apiKey} category="sports"/>} ></Route>
          <Route path="/technology" element={<News changeProgress={changeProgress}  key="technology"pageSize={20} country={'in'} headline="Technology" apiKey={apiKey} category="technology"/>} ></Route>
      </Routes>
      </div>
      </Router>
    )
}

export default App;

