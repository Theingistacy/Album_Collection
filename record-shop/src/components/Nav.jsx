import React from "react";
import { FaRecordVinyl } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "./cart/CartIcon";
import { motion } from "framer-motion";

import Form from "./Form";

const Nav = () => {
  const location = useLocation();
  return (
    <motion.nav
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul>
        <Link to='/' className='logo'>
          <FaRecordVinyl />
          Vinyl Destination
        </Link>

        {location.pathname.startsWith("/records") ? (
          <Form />
        ) : (
          <Link to='/records' className='browse-button'>
            Explore Our Collection
          </Link>
        )}

        <CartIcon />
      </ul>
    </motion.nav>
  );
};

export default Nav;
