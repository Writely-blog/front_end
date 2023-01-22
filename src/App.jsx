import { useState } from 'react';
import TheContextProvider from './TheContext';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Register from './components/authPages/Register';
import Login from './components/authPages/Login';
import AllPosts from './components/allPosts/AllPosts';
import MyPosts from './components/myPosts/MyPosts';

function App() {
  const ProtectedRoute = (props) => {
    return false ? props.children : <Navigate to='/login' />;
  };

  return (
    <TheContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPosts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/myPosts'
            element={
              <ProtectedRoute>
                <MyPosts />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TheContextProvider>
  );
}

export default App;
