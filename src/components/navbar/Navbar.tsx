import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge, MenuItem } from "@material-ui/core";
import { ShoppingCartOutlined, StorefrontOutlined} from "@material-ui/icons";
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Colonel from '../../assets/colonel.png';


const Navbar: React.FC<{login:boolean, id:number, role:string, handleClick:Function}> = ({login, id, role,handleClick}) => {
  const navigate = useNavigate();
  

  return (
    <>
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 flex flex-row">
          <div className="h-10 w-10 self-center mr-2">
          <img className="h-10 w-10 self-center" src={Colonel} />
        </div>
          <div>
            <a onClick={() => {navigate('/')}}className="text-2xl no-underline text-green-500 font-sans font-bold">Colonel Kernel's</a><br />
            <span className="text-xs text-yellow-500">Farmer's Market</span>
          </div>
        </div>
        <div className="sm:mb-0 self-center">
        {login===false&&
          <>
            <a onClick={() => {navigate('/register')}} className="text-md no-underline text-orange-600 ml-2 px-1">
              <Badge>
                REGISTER <AppRegistrationOutlinedIcon/>
              </Badge>
            </a>
            <a onClick={() => {navigate('/login')}} className="text-md no-underline text-orange-600 ml-2 px-1">
              <Badge>
                SIGN IN <LoginIcon/>
              </Badge>
            </a>
          </>  
          }
          {role==="Admin"&&<> 
          <MenuItem onClick={() => {navigate('/AddProducts')}}>ADD ITEM</MenuItem>
          </>}
          {login&&
          <>
            <a onClick={() => {navigate('/products')}} className="text-md no-underline text-orange-600 ml-2 px-1">
              <Badge>
                GO SHOPPING <StorefrontOutlined />
              </Badge>
            </a>
          
            <a onClick={() => {navigate('/cart')}}className="text-md no-underline text-orange-600 ml-2 px-1">
              <Badge>
                YOUR CART  <ShoppingCartOutlined />
              </Badge>
            </a>

            <a href="/" onClick={event=> handleClick()} className="text-md no-underline text-orange-600 ml-2 px-1">
              <Badge>
                SIGN OUT <LogoutIcon />
              </Badge>
            </a>
          </>
          }
        </div>
      </nav>
   </>
  );
};

export default Navbar;