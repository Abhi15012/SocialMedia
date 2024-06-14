import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header";
import "./index.css";
import Footer from "./Components/footer";
import SideBar from "./Components/sideBar";
import ViewSlide from "./Components/ViewSlide";

import PostList from "./Components/postList";
import PostlistProvider from "./store/postCrt-store";






const App = () => {
  const [selectTab, setselectTab] = useState("home");

  const createHandler = () => {
    const ab = "Create post";

    return setselectTab(ab);
  };

  const homeHandler = () => {
    const hi = "home";

    return setselectTab(hi);
  };
 

  return (
  
    <>
 < PostlistProvider>
    <div className="app-container">
          <div className="header">
            <Header></Header>

            {selectTab === "home" ? (
              <PostList></PostList>
            ) : (
              <ViewSlide></ViewSlide>
            )}

            <Footer></Footer>
          </div>
          <div className="sideBarComp">
            
            <SideBar
              data={selectTab}
              CrtHandler={createHandler}
              hm={homeHandler}
            ></SideBar>
          </div>
        </div>
        </PostlistProvider>
        </>

  );
};

export default App;
