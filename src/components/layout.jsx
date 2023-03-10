import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({
  notes,
  onAddNote,
  activeNote,
  setActiveNote,
}) {
  const [sidebarVisibility, setVisibility] = useState(true);

  const changeVisibility = () => {
    setVisibility(!sidebarVisibility);
  };

  return (
    <div id="layout-container">
      <Navbar hideSidebar={changeVisibility} />
      <div id="content">
        <Sidebar
          visibility={sidebarVisibility}
          notes={notes}
          onAddNote={onAddNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Outlet />
      </div>
    </div>
  );
}
