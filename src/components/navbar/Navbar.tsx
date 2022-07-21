import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge, MenuItem } from "@material-ui/core";
import { ShoppingCartOutlined, StorefrontOutlined} from "@material-ui/icons";
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Colonel from '../../assets/colonel.png';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


const Navbar: React.FC<{login:boolean, id:number, role:string, handleClick:Function}> = ({login, id, role,handleClick}) => {
  const navigate = useNavigate();
  

  return (
    <>
      <nav className="font-sans  flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white dark:bg-slate-800 shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 flex flex-row">
          <div className="h-10 w-10 self-center mr-2">
          <img className="h-10 w-10 self-center" src={Colonel} />
        </div>
          <div>
            <a onClick={() => {navigate('/')}}className="text-2xl cursor-pointer no-underline text-green-500 font-sans font-bold">Colonel Kernel's</a><br />
            <span className="text-xs text-yellow-500">Farmer's Market</span>
          </div>
        </div>
        <div className="sm:mb-0 self-center">
        {login===false&&
          <>
            <a onClick={() => {navigate('/register')}} className="text-md cursor-pointer no-underline text-orange-600 ml-2 px-1">
              <Badge>
                REGISTER <AppRegistrationOutlinedIcon/>
              </Badge>
            </a>
            <a onClick={() => {navigate('/login')}} className="text-md cursor-pointer no-underline text-orange-600 ml-2 px-1">
              <Badge>
                SIGN IN <LoginIcon/>
              </Badge>
            </a>
          </>  
          }
          {role==="Admin"&&<> 
          <a onClick={() => {navigate('/AddProducts')}} className="text-sm cursor-pointer no-underline text-purple-600 ml-2 px-1">
              <Badge>
                ADD ITEM <AddBoxOutlinedIcon />
              </Badge>
          </a>
          <a onClick={() => { navigate('/Admin-featured-Products'); } } className="text-sm cursor-pointer no-underline text-purple-600 ml-2 px-1">
                <Badge>
                  EDIT FEATURED <EditOutlinedIcon/>
                </Badge>
              </a>
              <a onClick={() => { navigate('/Admin-ProductONSale'); } } className="text-sm cursor-pointer no-underline text-purple-600 ml-2 px-1">
                <Badge> 
                  EDIT SALES <EditOutlinedIcon/>
                </Badge>
              </a>
              <a onClick={() => { navigate('/Admin-All-Products'); } } className="text-sm cursor-pointer no-underline text-purple-600 ml-2 px-1">
                <Badge>
                  PRODUCTS <EditOutlinedIcon/>
                </Badge>
              </a>
          
          </>}
          {login&&
          <>
            <a onClick={() => {navigate('/products')}} className="text-sm cursor-pointer no-underline text-orange-600 ml-2 px-1">
              <Badge>
                SHOP <StorefrontOutlined />
              </Badge>
            </a>

            <a onClick={() => {navigate('/featured')}} className="text-sm cursor-pointer no-underline text-orange-600 ml-2 px-1">
              <Badge>
                FEATURED <CampaignOutlinedIcon />
              </Badge>
            </a>

            <a onClick={() => {navigate('/sales')}} className="text-sm cursor-pointer no-underline text-orange-600 ml-2 px-1">
              <Badge>
                SALE <LocalOfferOutlinedIcon />
              </Badge>
            </a>
          
            <a onClick={() => {navigate('/cart')}}className="text-sm cursor-pointer no-underline text-orange-600 ml-2 px-1">
              <Badge>
                CART  <ShoppingCartOutlined />
              </Badge>
            </a>

            <a href="/" onClick={event=> handleClick()} className="text-sm no-underline text-orange-600 ml-2 px-1">
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