import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineDashboard, AiOutlineShop, AiOutlineSetting } from 'react-icons/ai';
import { BiUser, BiChat, BiHelpCircle } from 'react-icons/bi';
import { RiTeamLine } from 'react-icons/ri';
import { IoMdAddCircle } from 'react-icons/io';

const NavbarNested = () => {
  const sidebarStyles = {
    width: '300px',
    backgroundColor: '#4E8480',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    
  };

  const navLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    textDecoration: 'none',
    color: 'white',
    marginTop: '10px'
  };

  const navLinkStyles1 = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '25px',
    marginTop: '-30px'
  };

  const iconStyles = {
    marginRight: '10px',
  };

  const ulStyles = {
    listStyleType: 'none', // Remove bullets
    
  };

  return (
    <div style={sidebarStyles} >
      <nav>
        <ul style={ulStyles}>
        <li>
            <NavLink
              exact
              to="/UsersTable"
              style={navLinkStyles1}
              activeStyle={{ fontWeight: 'bold' }}
            >
              Business Owner
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/BusinessOwnerUpdate"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <AiOutlineDashboard style={iconStyles} />
              Complete Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/BusinessOwnerUpdateAgain"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <AiOutlineDashboard style={iconStyles} />
              Update Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/BusinessQuestion"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <AiOutlineDashboard style={iconStyles} />
              Business Questionnaire
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ViewBusiness"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <AiOutlineShop style={iconStyles} />
              My Business
            </NavLink>
            <ul style={ulStyles}>
              <li>
                <NavLink
                  to="/ViewBusiness"
                  style={navLinkStyles}
                  activeStyle={{ fontWeight: 'bold' }}
                >
                  <RiTeamLine style={iconStyles} />
                  View Business
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/AddBusiness"
                  style={navLinkStyles}
                  activeStyle={{ fontWeight: 'bold' }}
                >
                  <IoMdAddCircle style={iconStyles} />
                  Add Business
                </NavLink>
                <NavLink
                  to="/UpdateBusiness"
                  style={navLinkStyles}
                  activeStyle={{ fontWeight: 'bold' }}
                >
                  <RiTeamLine style={iconStyles} />
                  Update Business
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/UpdateAgent"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <AiOutlineSetting style={iconStyles} />
              Configuration
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Agents"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <BiUser style={iconStyles} />
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/subscription"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <BiChat style={iconStyles} />
              Subscription
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/EmailBanner"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <BiChat style={iconStyles} />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/FaqWithBg"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <AiOutlineSetting style={iconStyles} />
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Faq"
              style={navLinkStyles}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <BiHelpCircle style={iconStyles} />
              FAQs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarNested;
