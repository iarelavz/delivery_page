import ActualDate from "./components/ActualDate";
import Tabs from "./components/Tabs";
import React, { useState } from 'react';
import './App.css';

export default function App() {

    return (
      <div className="main-container">
        < ActualDate />
        <Tabs />
        </div>
    )
  }

