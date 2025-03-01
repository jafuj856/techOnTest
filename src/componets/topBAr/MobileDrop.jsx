import { Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function MobileDrop({ isOpen, setIsOpen }) {
  const dropdownRef = useRef(null);

    useEffect(() => {

    // Function to handle clicks outside the dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown when clicking outside
      }
    }

    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <Modal open={isOpen} onclose={()=>setIsOpen(false)}>
      <div
        style={{
          backdropFilter: "blur(100px)",
          WebkitBackdropFilter: "blur(200px)",
          boxShadow: "10px 10px 10px 0px rgba(0, 0, 0, 0.1)",
          background: "#FFFFFF66",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "6px",
        }}
        ref={dropdownRef}
        className={`
        ${isOpen ? "opacity-100 z-50" : "opacity-0 -z-10"} 
        absolute top-20 w-full h-10 bg-red-400 left-0 p-4 
        flex flex-col transition-all duration-1000 ease-in-out
      `}
      >
        {/* Your dropdown content goes here */}
      </div>
    </Modal>
  );
}
export default MobileDrop;